
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const LC_FIG_SET_PARENT: string;
	export const FIG_PID: string;
	export const CONDA_BACKUP_RANLIB: string;
	export const CONDA_BACKUP_DEBUG_CXXFLAGS: string;
	export const MANPATH: string;
	export const CONDA_BACKUP_OBJC_FOR_BUILD: string;
	export const rvm_use_flag: string;
	export const rvm_bin_path: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const CONDA_BACKUP_INSTALL_NAME_TOOL: string;
	export const rvm_quiet_flag: string;
	export const NVM_CD_FLAGS: string;
	export const CONDA_BACKUP_REDO_PREBINDING: string;
	export const rvm_gemstone_url: string;
	export const HOST: string;
	export const TERM: string;
	export const SHELL: string;
	export const FIGTERM_SESSION_ID: string;
	export const CONDA_BACKUP_AR: string;
	export const rvm_docs_type: string;
	export const HOMEBREW_REPOSITORY: string;
	export const TMPDIR: string;
	export const npm_config_global_prefix: string;
	export const CONDA_BACKUP_AS: string;
	export const CONDA_SHLVL: string;
	export const CONDA_PROMPT_MODIFIER: string;
	export const TERM_PROGRAM_VERSION: string;
	export const COLOR: string;
	export const rvm_hook: string;
	export const CONDA_BACKUP_LD: string;
	export const CONDA_BACKUP_STRIP: string;
	export const TERM_SESSION_ID: string;
	export const npm_config_noproxy: string;
	export const CONDA_BACKUP_OTOOL: string;
	export const npm_config_local_prefix: string;
	export const FIG_SET_PARENT_CHECK: string;
	export const CONDA_BACKUP_LIBTOOL: string;
	export const CONDA_BACKUP_ac_cv_func_malloc_0_nonnull: string;
	export const NVM_DIR: string;
	export const USER: string;
	export const CONDA_BACKUP_SIZE: string;
	export const rvm_gemstone_package_file: string;
	export const CONDA_BACKUP_CHECKSYMS: string;
	export const CONDA_BACKUP_HOST: string;
	export const npm_config_globalconfig: string;
	export const CONDA_EXE: string;
	export const CONDA_BACKUP_CXX_FOR_BUILD: string;
	export const rvm_path: string;
	export const SSH_AUTH_SOCK: string;
	export const CONDA_BACKUP_BUILD: string;
	export const CONDA_BACKUP_OBJC: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const CONDA_BACKUP_CLANG: string;
	export const rvm_proxy: string;
	export const rvm_ruby_file: string;
	export const CONDA_BACKUP_host_alias: string;
	export const CONDA_BACKUP_LDFLAGS: string;
	export const CONDA_BACKUP_PAGESTUFF: string;
	export const _CE_CONDA: string;
	export const CONDA_BACKUP_CXX: string;
	export const rvm_silent_flag: string;
	export const rvm_prefix: string;
	export const CONDA_PREFIX_1: string;
	export const CONDA_BACKUP_CXXFLAGS: string;
	export const rvm_ruby_make: string;
	export const PATH: string;
	export const RUBY_CONFIGURE_OPTS: string;
	export const npm_package_json: string;
	export const _: string;
	export const XML_CATALOG_FILES: string;
	export const npm_config_userconfig: string;
	export const npm_config_init_module: string;
	export const CONDA_PREFIX: string;
	export const __CFBundleIdentifier: string;
	export const npm_command: string;
	export const TTY: string;
	export const PWD: string;
	export const CONDA_BACKUP_CC_FOR_BUILD: string;
	export const CONDA_BACKUP_NMEDIT: string;
	export const npm_lifecycle_event: string;
	export const EDITOR: string;
	export const CONDA_BACKUP_SDKROOT: string;
	export const CONDA_BACKUP_CONDA_TOOLCHAIN_BUILD: string;
	export const npm_package_name: string;
	export const LANG: string;
	export const rvm_sdk: string;
	export const npm_config_npm_version: string;
	export const CONDA_BACKUP_MESON_ARGS: string;
	export const XPC_FLAGS: string;
	export const CONDA_BACKUP__CONDA_PYTHON_SYSCONFIGDATA_NAME: string;
	export const CONDA_BACKUP_CLANGXX: string;
	export const npm_config_node_gyp: string;
	export const RBENV_SHELL: string;
	export const npm_package_version: string;
	export const _CE_M: string;
	export const XPC_SERVICE_NAME: string;
	export const rvm_version: string;
	export const rvm_script_name: string;
	export const rvm_pretty_print_flag: string;
	export const SHLVL: string;
	export const HOME: string;
	export const CONDA_BACKUP_build_alias: string;
	export const CONDA_BACKUP_NM: string;
	export const rvm_ruby_mode: string;
	export const CONDA_BACKUP_CONDA_TOOLCHAIN_HOST: string;
	export const HOMEBREW_PREFIX: string;
	export const CONDA_BACKUP_ac_cv_func_realloc_0_nonnull: string;
	export const CONDA_BACKUP_DEBUG_CFLAGS: string;
	export const FIG_SET_PARENT: string;
	export const npm_config_cache: string;
	export const CONDA_PYTHON_EXE: string;
	export const LOGNAME: string;
	export const npm_lifecycle_script: string;
	export const CONDA_BACKUP_SEG_HACK: string;
	export const rvm_alias_expanded: string;
	export const CONDA_BACKUP_CMAKE_PREFIX_PATH: string;
	export const CONDA_BACKUP_CC: string;
	export const CONDA_DEFAULT_ENV: string;
	export const npm_config_user_agent: string;
	export const CONDA_BACKUP_SEGEDIT: string;
	export const rvm_nightly_flag: string;
	export const CONDA_BACKUP_LDFLAGS_LD: string;
	export const CONDA_BACKUP_STRINGS: string;
	export const rvm_ruby_make_install: string;
	export const INFOPATH: string;
	export const HOMEBREW_CELLAR: string;
	export const install_flag: string;
	export const rvm_niceness: string;
	export const DISPLAY: string;
	export const rvm_ruby_bits: string;
	export const rvm_recommended_ruby: string;
	export const rvm_bin_flag: string;
	export const CONDA_BACKUP_CFLAGS: string;
	export const CONDA_BACKUP_CPPFLAGS: string;
	export const rvm_only_path_flag: string;
	export const npm_node_execpath: string;
	export const npm_config_prefix: string;
	export const CONDA_BACKUP_SEG_ADDR_TABLE: string;
	export const CONDA_BACKUP_LIPO: string;
	export const FIG_TERM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		LC_FIG_SET_PARENT: string;
		FIG_PID: string;
		CONDA_BACKUP_RANLIB: string;
		CONDA_BACKUP_DEBUG_CXXFLAGS: string;
		MANPATH: string;
		CONDA_BACKUP_OBJC_FOR_BUILD: string;
		rvm_use_flag: string;
		rvm_bin_path: string;
		TERM_PROGRAM: string;
		NODE: string;
		INIT_CWD: string;
		CONDA_BACKUP_INSTALL_NAME_TOOL: string;
		rvm_quiet_flag: string;
		NVM_CD_FLAGS: string;
		CONDA_BACKUP_REDO_PREBINDING: string;
		rvm_gemstone_url: string;
		HOST: string;
		TERM: string;
		SHELL: string;
		FIGTERM_SESSION_ID: string;
		CONDA_BACKUP_AR: string;
		rvm_docs_type: string;
		HOMEBREW_REPOSITORY: string;
		TMPDIR: string;
		npm_config_global_prefix: string;
		CONDA_BACKUP_AS: string;
		CONDA_SHLVL: string;
		CONDA_PROMPT_MODIFIER: string;
		TERM_PROGRAM_VERSION: string;
		COLOR: string;
		rvm_hook: string;
		CONDA_BACKUP_LD: string;
		CONDA_BACKUP_STRIP: string;
		TERM_SESSION_ID: string;
		npm_config_noproxy: string;
		CONDA_BACKUP_OTOOL: string;
		npm_config_local_prefix: string;
		FIG_SET_PARENT_CHECK: string;
		CONDA_BACKUP_LIBTOOL: string;
		CONDA_BACKUP_ac_cv_func_malloc_0_nonnull: string;
		NVM_DIR: string;
		USER: string;
		CONDA_BACKUP_SIZE: string;
		rvm_gemstone_package_file: string;
		CONDA_BACKUP_CHECKSYMS: string;
		CONDA_BACKUP_HOST: string;
		npm_config_globalconfig: string;
		CONDA_EXE: string;
		CONDA_BACKUP_CXX_FOR_BUILD: string;
		rvm_path: string;
		SSH_AUTH_SOCK: string;
		CONDA_BACKUP_BUILD: string;
		CONDA_BACKUP_OBJC: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		CONDA_BACKUP_CLANG: string;
		rvm_proxy: string;
		rvm_ruby_file: string;
		CONDA_BACKUP_host_alias: string;
		CONDA_BACKUP_LDFLAGS: string;
		CONDA_BACKUP_PAGESTUFF: string;
		_CE_CONDA: string;
		CONDA_BACKUP_CXX: string;
		rvm_silent_flag: string;
		rvm_prefix: string;
		CONDA_PREFIX_1: string;
		CONDA_BACKUP_CXXFLAGS: string;
		rvm_ruby_make: string;
		PATH: string;
		RUBY_CONFIGURE_OPTS: string;
		npm_package_json: string;
		_: string;
		XML_CATALOG_FILES: string;
		npm_config_userconfig: string;
		npm_config_init_module: string;
		CONDA_PREFIX: string;
		__CFBundleIdentifier: string;
		npm_command: string;
		TTY: string;
		PWD: string;
		CONDA_BACKUP_CC_FOR_BUILD: string;
		CONDA_BACKUP_NMEDIT: string;
		npm_lifecycle_event: string;
		EDITOR: string;
		CONDA_BACKUP_SDKROOT: string;
		CONDA_BACKUP_CONDA_TOOLCHAIN_BUILD: string;
		npm_package_name: string;
		LANG: string;
		rvm_sdk: string;
		npm_config_npm_version: string;
		CONDA_BACKUP_MESON_ARGS: string;
		XPC_FLAGS: string;
		CONDA_BACKUP__CONDA_PYTHON_SYSCONFIGDATA_NAME: string;
		CONDA_BACKUP_CLANGXX: string;
		npm_config_node_gyp: string;
		RBENV_SHELL: string;
		npm_package_version: string;
		_CE_M: string;
		XPC_SERVICE_NAME: string;
		rvm_version: string;
		rvm_script_name: string;
		rvm_pretty_print_flag: string;
		SHLVL: string;
		HOME: string;
		CONDA_BACKUP_build_alias: string;
		CONDA_BACKUP_NM: string;
		rvm_ruby_mode: string;
		CONDA_BACKUP_CONDA_TOOLCHAIN_HOST: string;
		HOMEBREW_PREFIX: string;
		CONDA_BACKUP_ac_cv_func_realloc_0_nonnull: string;
		CONDA_BACKUP_DEBUG_CFLAGS: string;
		FIG_SET_PARENT: string;
		npm_config_cache: string;
		CONDA_PYTHON_EXE: string;
		LOGNAME: string;
		npm_lifecycle_script: string;
		CONDA_BACKUP_SEG_HACK: string;
		rvm_alias_expanded: string;
		CONDA_BACKUP_CMAKE_PREFIX_PATH: string;
		CONDA_BACKUP_CC: string;
		CONDA_DEFAULT_ENV: string;
		npm_config_user_agent: string;
		CONDA_BACKUP_SEGEDIT: string;
		rvm_nightly_flag: string;
		CONDA_BACKUP_LDFLAGS_LD: string;
		CONDA_BACKUP_STRINGS: string;
		rvm_ruby_make_install: string;
		INFOPATH: string;
		HOMEBREW_CELLAR: string;
		install_flag: string;
		rvm_niceness: string;
		DISPLAY: string;
		rvm_ruby_bits: string;
		rvm_recommended_ruby: string;
		rvm_bin_flag: string;
		CONDA_BACKUP_CFLAGS: string;
		CONDA_BACKUP_CPPFLAGS: string;
		rvm_only_path_flag: string;
		npm_node_execpath: string;
		npm_config_prefix: string;
		CONDA_BACKUP_SEG_ADDR_TABLE: string;
		CONDA_BACKUP_LIPO: string;
		FIG_TERM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
