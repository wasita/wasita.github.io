"""One-shot image compressor for static/images/.

Resizes images wider than MAX_WIDTH down to MAX_WIDTH, keeps aspect ratio,
and re-encodes JPEGs at QUALITY. PNGs are re-saved with optimize=True.
Skips tiny images, GIFs (need video tools), and the generated OG card.

Run: python3 scripts/compress_images.py
"""

from pathlib import Path
from typing import Optional, Tuple

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
IMG_DIR = ROOT / "static" / "images"

MAX_WIDTH = 1600
QUALITY = 85
SKIP_UNDER_BYTES = 150 * 1024
SKIP_NAMES = {"og-image.png"}  # freshly generated, already sized


def compress_one(path: Path) -> Optional[Tuple[int, int]]:
    if path.suffix.lower() == ".gif":
        return None
    if path.name in SKIP_NAMES:
        return None
    before = path.stat().st_size
    if before < SKIP_UNDER_BYTES:
        return None

    # Keep the original bytes so we can bail if recompression made things worse
    original_bytes = path.read_bytes()
    img = Image.open(path)

    # Skip animated images (e.g. animated WebP): flattening would lose frames
    if getattr(img, "is_animated", False):
        return None

    w, h = img.size
    if w > MAX_WIDTH:
        new_h = int(h * MAX_WIDTH / w)
        img = img.resize((MAX_WIDTH, new_h), Image.LANCZOS)

    suffix = path.suffix.lower()
    if suffix in {".jpg", ".jpeg"}:
        if img.mode != "RGB":
            img = img.convert("RGB")
        img.save(path, "JPEG", quality=QUALITY, optimize=True, progressive=True)
    elif suffix == ".png":
        img.save(path, "PNG", optimize=True)
    elif suffix == ".webp":
        img.save(path, "WEBP", quality=QUALITY, method=6)
    else:
        return None

    after = path.stat().st_size
    if after >= before:
        # Re-encoding didn't help — restore original
        path.write_bytes(original_bytes)
        return None
    return before, after


def main():
    rows = []
    total_before = total_after = 0
    for path in sorted(IMG_DIR.iterdir()):
        if not path.is_file():
            continue
        result = compress_one(path)
        if result is None:
            continue
        before, after = result
        total_before += before
        total_after += after
        rows.append((path.name, before, after))

    for name, b, a in rows:
        pct = (1 - a / b) * 100
        print(f"  {name:<45} {b // 1024:>5} KB -> {a // 1024:>5} KB  ({pct:+.0f}%)")
    if total_before:
        print(
            f"\nTotal: {total_before // 1024} KB -> {total_after // 1024} KB "
            f"(saved {(total_before - total_after) // 1024} KB)"
        )


if __name__ == "__main__":
    main()
