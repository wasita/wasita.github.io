"""Generate a 1200x630 Open Graph image for wasita.space.

Run: python3 scripts/generate_og_image.py
Output: static/images/og-image.png
"""

from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
PHOTO_PATH = ROOT / "static" / "images" / "wasi_icon.jpg"
OUTPUT_PATH = ROOT / "static" / "images" / "og-image.png"

W, H = 1200, 630
BG = (10, 10, 15)  # matches site dark bg (#0a0a0f)
CYAN = (34, 211, 238)  # tailwind cyan-400
FUCHSIA = (232, 121, 249)  # tailwind fuchsia-400
WHITE = (237, 237, 237)
GRAY = (163, 163, 163)

# macOS system fonts
FONT_BOLD = "/System/Library/Fonts/Helvetica.ttc"
FONT_REG = "/System/Library/Fonts/Helvetica.ttc"


def gradient_text(draw: ImageDraw.ImageDraw, xy, text, font, start, end):
    """Render text with a horizontal gradient fill."""
    # Measure text
    bbox = draw.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    # Draw text onto a mask
    mask = Image.new("L", (tw + 20, th + 20), 0)
    md = ImageDraw.Draw(mask)
    md.text((-bbox[0], -bbox[1]), text, fill=255, font=font)
    # Build a gradient the same size as the mask
    grad = Image.new("RGB", (tw + 20, th + 20), start)
    gd = ImageDraw.Draw(grad)
    for x in range(tw + 20):
        t = x / max(tw + 20 - 1, 1)
        r = int(start[0] + (end[0] - start[0]) * t)
        g = int(start[1] + (end[1] - start[1]) * t)
        b = int(start[2] + (end[2] - start[2]) * t)
        gd.line([(x, 0), (x, th + 20)], fill=(r, g, b))
    # Paste gradient masked by the text
    # Caller passes xy as top-left of the visible text
    # so we offset by the negative bbox we compensated for above
    return grad, mask, xy


def paste_gradient(base, grad_mask_xy):
    grad, mask, (x, y) = grad_mask_xy
    base.paste(grad, (x, y), mask)


def make_circle(img: Image.Image, size: int) -> Image.Image:
    """Crop img to a circle of given size."""
    # Square-crop to smallest side, then resize
    w, h = img.size
    side = min(w, h)
    left = (w - side) // 2
    top = (h - side) // 2
    img = img.crop((left, top, left + side, top + side)).resize((size, size), Image.LANCZOS)
    # Circular mask
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, size, size), fill=255)
    out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    out.paste(img, (0, 0), mask)
    return out


def glow_ring(size: int, color, blur: int = 20, thickness: int = 8) -> Image.Image:
    """A blurred ring used as a soft glow behind the photo."""
    pad = blur * 2
    full = size + pad * 2
    ring = Image.new("RGBA", (full, full), (0, 0, 0, 0))
    d = ImageDraw.Draw(ring)
    d.ellipse(
        (pad - thickness, pad - thickness, pad + size + thickness, pad + size + thickness),
        outline=color + (220,),
        width=thickness,
    )
    return ring.filter(ImageFilter.GaussianBlur(blur))


def main():
    img = Image.new("RGB", (W, H), BG)

    # Subtle gradient accent in the top-right corner
    accent = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ad = ImageDraw.Draw(accent)
    for i in range(200):
        alpha = int(60 * (1 - i / 200))
        ad.ellipse((W - 300 + i, -200 + i, W + 100 - i, 200 - i), outline=FUCHSIA + (alpha,))
    accent = accent.filter(ImageFilter.GaussianBlur(30))
    img.paste(accent, (0, 0), accent)

    # Photo on the left
    photo = Image.open(PHOTO_PATH).convert("RGB")
    photo_size = 380
    circle = make_circle(photo, photo_size)
    photo_x = 90
    photo_y = (H - photo_size) // 2

    # Glow behind photo
    glow = glow_ring(photo_size, CYAN, blur=25, thickness=10)
    gx = photo_x - 50
    gy = photo_y - 50
    img.paste(glow, (gx, gy), glow)

    img.paste(circle, (photo_x, photo_y), circle)

    # Text block on the right
    draw = ImageDraw.Draw(img)
    text_x = photo_x + photo_size + 70

    # Name with gradient
    name_font = ImageFont.truetype(FONT_BOLD, 68)
    name_layer = gradient_text(draw, (text_x, 180), "Wasita Mahaphanit", name_font, CYAN, FUCHSIA)
    paste_gradient(img, name_layer)

    # Tagline
    tag_font = ImageFont.truetype(FONT_REG, 26)
    tagline = [
        "PhD candidate studying how people navigate",
        "uncertainty about other minds through",
        "interaction and conversation.",
    ]
    y = 280
    for line in tagline:
        draw.text((text_x, y), line, fill=WHITE, font=tag_font)
        y += 38

    # Site URL at bottom
    url_font = ImageFont.truetype(FONT_REG, 22)
    draw.text((text_x, 480), "wasita.space", fill=GRAY, font=url_font)

    # Thin gradient bar at the bottom of the image
    bar = Image.new("RGB", (W, 6), BG)
    bd = ImageDraw.Draw(bar)
    for x in range(W):
        t = x / (W - 1)
        r = int(CYAN[0] + (FUCHSIA[0] - CYAN[0]) * t)
        g = int(CYAN[1] + (FUCHSIA[1] - CYAN[1]) * t)
        b = int(CYAN[2] + (FUCHSIA[2] - CYAN[2]) * t)
        bd.line([(x, 0), (x, 6)], fill=(r, g, b))
    img.paste(bar, (0, H - 6))

    img.save(OUTPUT_PATH, "PNG", optimize=True)
    print(f"Wrote {OUTPUT_PATH} ({OUTPUT_PATH.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
