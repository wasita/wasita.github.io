
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
	export const AS: string;
	export const LC_FIG_SET_PARENT: string;
	export const FIG_PID: string;
	export const LDFLAGS: string;
	export const AR: string;
	export const RSTUDIO_WHICH_R: string;
	export const MANPATH: string;
	export const ac_cv_func_malloc_0_nonnull: string;
	export const rvm_use_flag: string;
	export const rvm_bin_path: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const ac_cv_func_realloc_0_nonnull: string;
	export const INIT_CWD: string;
	export const rvm_quiet_flag: string;
	export const NVM_CD_FLAGS: string;
	export const OBJC: string;
	export const HOST: string;
	export const rvm_gemstone_url: string;
	export const TERM: string;
	export const SHELL: string;
	export const NM: string;
	export const FIGTERM_SESSION_ID: string;
	export const CPPFLAGS: string;
	export const rvm_docs_type: string;
	export const HOMEBREW_REPOSITORY: string;
	export const TMPDIR: string;
	export const npm_config_global_prefix: string;
	export const PAGESTUFF: string;
	export const CONDA_SHLVL: string;
	export const LIPO: string;
	export const CONDA_PROMPT_MODIFIER: string;
	export const TERM_PROGRAM_VERSION: string;
	export const GSETTINGS_SCHEMA_DIR_CONDA_BACKUP: string;
	export const SIZE: string;
	export const NMEDIT: string;
	export const SDKROOT: string;
	export const COLOR: string;
	export const rvm_hook: string;
	export const TERM_SESSION_ID: string;
	export const npm_config_noproxy: string;
	export const CXX_FOR_BUILD: string;
	export const INSTALL_NAME_TOOL: string;
	export const npm_config_local_prefix: string;
	export const SEGEDIT: string;
	export const GFORTRAN: string;
	export const FIG_SET_PARENT_CHECK: string;
	export const SEG_HACK: string;
	export const NVM_DIR: string;
	export const USER: string;
	export const rvm_gemstone_package_file: string;
	export const CLANGXX: string;
	export const LIBTOOL: string;
	export const npm_config_globalconfig: string;
	export const CONDA_TOOLCHAIN_BUILD: string;
	export const FC_FOR_BUILD: string;
	export const CONDA_EXE: string;
	export const OTOOL: string;
	export const rvm_path: string;
	export const SSH_AUTH_SOCK: string;
	export const DEBUG_FORTRANFLAGS: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const CXXFLAGS: string;
	export const rvm_proxy: string;
	export const rvm_ruby_file: string;
	export const STRINGS: string;
	export const CONDA_TOOLCHAIN_HOST: string;
	export const _CE_CONDA: string;
	export const CHECKSYMS: string;
	export const rvm_silent_flag: string;
	export const rvm_prefix: string;
	export const CONDA_PREFIX_1: string;
	export const rvm_ruby_make: string;
	export const PATH: string;
	export const GSETTINGS_SCHEMA_DIR: string;
	export const MESON_ARGS: string;
	export const RUBY_CONFIGURE_OPTS: string;
	export const npm_package_json: string;
	export const _: string;
	export const XML_CATALOG_FILES: string;
	export const CONDA_PREFIX_2: string;
	export const npm_config_userconfig: string;
	export const npm_config_init_module: string;
	export const DEBUG_CXXFLAGS: string;
	export const BUILD: string;
	export const LD: string;
	export const CONDA_PREFIX: string;
	export const __CFBundleIdentifier: string;
	export const npm_command: string;
	export const F90: string;
	export const TTY: string;
	export const PWD: string;
	export const STRIP: string;
	export const npm_lifecycle_event: string;
	export const EDITOR: string;
	export const CMAKE_ARGS: string;
	export const npm_package_name: string;
	export const LANG: string;
	export const F95: string;
	export const rvm_sdk: string;
	export const npm_config_npm_version: string;
	export const DEBUG_FFLAGS: string;
	export const XPC_FLAGS: string;
	export const F77: string;
	export const REDO_PREBINDING: string;
	export const npm_config_node_gyp: string;
	export const RBENV_SHELL: string;
	export const npm_package_version: string;
	export const CXX: string;
	export const CC_FOR_BUILD: string;
	export const CLANG: string;
	export const _CE_M: string;
	export const XPC_SERVICE_NAME: string;
	export const rvm_version: string;
	export const rvm_script_name: string;
	export const rvm_pretty_print_flag: string;
	export const SHLVL: string;
	export const HOME: string;
	export const rvm_ruby_mode: string;
	export const FORTRANFLAGS: string;
	export const CFLAGS: string;
	export const HOMEBREW_PREFIX: string;
	export const _CONDA_PYTHON_SYSCONFIGDATA_NAME: string;
	export const FC: string;
	export const FIG_SET_PARENT: string;
	export const npm_config_cache: string;
	export const CONDA_PYTHON_EXE: string;
	export const LOGNAME: string;
	export const npm_lifecycle_script: string;
	export const rvm_alias_expanded: string;
	export const build_alias: string;
	export const CONDA_DEFAULT_ENV: string;
	export const npm_config_user_agent: string;
	export const DEBUG_CFLAGS: string;
	export const RANLIB: string;
	export const rvm_nightly_flag: string;
	export const rvm_ruby_make_install: string;
	export const INFOPATH: string;
	export const HOMEBREW_CELLAR: string;
	export const CMAKE_PREFIX_PATH: string;
	export const CC: string;
	export const SEG_ADDR_TABLE: string;
	export const rvm_niceness: string;
	export const DISPLAY: string;
	export const host_alias: string;
	export const rvm_ruby_bits: string;
	export const LDFLAGS_LD: string;
	export const rvm_bin_flag: string;
	export const rvm_only_path_flag: string;
	export const npm_node_execpath: string;
	export const npm_config_prefix: string;
	export const OBJC_FOR_BUILD: string;
	export const FFLAGS: string;
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
		AS: string;
		LC_FIG_SET_PARENT: string;
		FIG_PID: string;
		LDFLAGS: string;
		AR: string;
		RSTUDIO_WHICH_R: string;
		MANPATH: string;
		ac_cv_func_malloc_0_nonnull: string;
		rvm_use_flag: string;
		rvm_bin_path: string;
		TERM_PROGRAM: string;
		NODE: string;
		ac_cv_func_realloc_0_nonnull: string;
		INIT_CWD: string;
		rvm_quiet_flag: string;
		NVM_CD_FLAGS: string;
		OBJC: string;
		HOST: string;
		rvm_gemstone_url: string;
		TERM: string;
		SHELL: string;
		NM: string;
		FIGTERM_SESSION_ID: string;
		CPPFLAGS: string;
		rvm_docs_type: string;
		HOMEBREW_REPOSITORY: string;
		TMPDIR: string;
		npm_config_global_prefix: string;
		PAGESTUFF: string;
		CONDA_SHLVL: string;
		LIPO: string;
		CONDA_PROMPT_MODIFIER: string;
		TERM_PROGRAM_VERSION: string;
		GSETTINGS_SCHEMA_DIR_CONDA_BACKUP: string;
		SIZE: string;
		NMEDIT: string;
		SDKROOT: string;
		COLOR: string;
		rvm_hook: string;
		TERM_SESSION_ID: string;
		npm_config_noproxy: string;
		CXX_FOR_BUILD: string;
		INSTALL_NAME_TOOL: string;
		npm_config_local_prefix: string;
		SEGEDIT: string;
		GFORTRAN: string;
		FIG_SET_PARENT_CHECK: string;
		SEG_HACK: string;
		NVM_DIR: string;
		USER: string;
		rvm_gemstone_package_file: string;
		CLANGXX: string;
		LIBTOOL: string;
		npm_config_globalconfig: string;
		CONDA_TOOLCHAIN_BUILD: string;
		FC_FOR_BUILD: string;
		CONDA_EXE: string;
		OTOOL: string;
		rvm_path: string;
		SSH_AUTH_SOCK: string;
		DEBUG_FORTRANFLAGS: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		CXXFLAGS: string;
		rvm_proxy: string;
		rvm_ruby_file: string;
		STRINGS: string;
		CONDA_TOOLCHAIN_HOST: string;
		_CE_CONDA: string;
		CHECKSYMS: string;
		rvm_silent_flag: string;
		rvm_prefix: string;
		CONDA_PREFIX_1: string;
		rvm_ruby_make: string;
		PATH: string;
		GSETTINGS_SCHEMA_DIR: string;
		MESON_ARGS: string;
		RUBY_CONFIGURE_OPTS: string;
		npm_package_json: string;
		_: string;
		XML_CATALOG_FILES: string;
		CONDA_PREFIX_2: string;
		npm_config_userconfig: string;
		npm_config_init_module: string;
		DEBUG_CXXFLAGS: string;
		BUILD: string;
		LD: string;
		CONDA_PREFIX: string;
		__CFBundleIdentifier: string;
		npm_command: string;
		F90: string;
		TTY: string;
		PWD: string;
		STRIP: string;
		npm_lifecycle_event: string;
		EDITOR: string;
		CMAKE_ARGS: string;
		npm_package_name: string;
		LANG: string;
		F95: string;
		rvm_sdk: string;
		npm_config_npm_version: string;
		DEBUG_FFLAGS: string;
		XPC_FLAGS: string;
		F77: string;
		REDO_PREBINDING: string;
		npm_config_node_gyp: string;
		RBENV_SHELL: string;
		npm_package_version: string;
		CXX: string;
		CC_FOR_BUILD: string;
		CLANG: string;
		_CE_M: string;
		XPC_SERVICE_NAME: string;
		rvm_version: string;
		rvm_script_name: string;
		rvm_pretty_print_flag: string;
		SHLVL: string;
		HOME: string;
		rvm_ruby_mode: string;
		FORTRANFLAGS: string;
		CFLAGS: string;
		HOMEBREW_PREFIX: string;
		_CONDA_PYTHON_SYSCONFIGDATA_NAME: string;
		FC: string;
		FIG_SET_PARENT: string;
		npm_config_cache: string;
		CONDA_PYTHON_EXE: string;
		LOGNAME: string;
		npm_lifecycle_script: string;
		rvm_alias_expanded: string;
		build_alias: string;
		CONDA_DEFAULT_ENV: string;
		npm_config_user_agent: string;
		DEBUG_CFLAGS: string;
		RANLIB: string;
		rvm_nightly_flag: string;
		rvm_ruby_make_install: string;
		INFOPATH: string;
		HOMEBREW_CELLAR: string;
		CMAKE_PREFIX_PATH: string;
		CC: string;
		SEG_ADDR_TABLE: string;
		rvm_niceness: string;
		DISPLAY: string;
		host_alias: string;
		rvm_ruby_bits: string;
		LDFLAGS_LD: string;
		rvm_bin_flag: string;
		rvm_only_path_flag: string;
		npm_node_execpath: string;
		npm_config_prefix: string;
		OBJC_FOR_BUILD: string;
		FFLAGS: string;
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
