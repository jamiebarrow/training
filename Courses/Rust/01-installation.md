# Installation

To install Rust the `rustup` command can be installed. Download the `rustup-init` command from the [website][1] for your
platform, e.g. on Windows you can download the 64-bit `rustup-init.exe` binary to install the tools if you have a 64-bit
CPU.

There are also other details about the recommended installation steps on the website, such as having to install the
[Microsoft C++ Build Tools][2].

## Upgrading an existing installation

If you already have a version of Rust installed, but there is a newer version available then you can also use the
`rustup` tool to check as well as manage the Rust tools installed.

You can view what is currently installed and configured using `rustup show`:

```shell
C:\Users\jamiebarrow> rustup show
Default host: x86_64-pc-windows-msvc
rustup home:  C:\Users\jamiebarrow\.rustup

stable-x86_64-pc-windows-msvc (default)
rustc 1.69.0 (84c898d65 2023-04-16)
```

The `rustup check` command can also see if there are updates available:

```shell
C:\Users\jamiebarrow> rustup check
stable-x86_64-pc-windows-msvc - Update available : 1.69.0 (84c898d65 2023-04-16) -> 1.70.0 (90c541806 2023-05-31)
rustup - Up to date : 1.26.0
```

And then, intuitively, you can update to the latest version using the `rustup update` command:

```shell
C:\Users\jamiebarrow> rustup update
info: syncing channel updates for 'stable-x86_64-pc-windows-msvc'
info: latest update on 2023-06-01, rust version 1.70.0 (90c541806 2023-05-31)
info: downloading component 'rust-src'
  2.3 MiB /   2.3 MiB (100 %)   1.4 MiB/s in  1s ETA:  0s
info: downloading component 'cargo'
  4.7 MiB /   4.7 MiB (100 %) 915.8 KiB/s in  4s ETA:  0s
info: downloading component 'clippy'
  1.9 MiB /   1.9 MiB (100 %) 967.7 KiB/s in  2s ETA:  0s
info: downloading component 'rust-docs'
 13.5 MiB /  13.5 MiB (100 %) 988.8 KiB/s in 15s ETA:  0s
info: downloading component 'rust-std'
 25.1 MiB /  25.1 MiB (100 %)   1.0 MiB/s in 26s ETA:  0s
info: downloading component 'rustc'
 60.6 MiB /  60.6 MiB (100 %)   1.4 MiB/s in 55s ETA:  0s
info: downloading component 'rustfmt'
info: removing previous version of component 'rust-src'
info: removing previous version of component 'cargo'
info: removing previous version of component 'clippy'
info: removing previous version of component 'rust-docs'
info: removing previous version of component 'rust-std'
info: removing previous version of component 'rustc'
info: removing previous version of component 'rustfmt'
info: installing component 'rust-src'
info: installing component 'cargo'
info: installing component 'clippy'
info: installing component 'rust-docs'
 13.5 MiB /  13.5 MiB (100 %)   1.0 MiB/s in  9s ETA:  0s
info: installing component 'rust-std'
 25.1 MiB /  25.1 MiB (100 %)  10.1 MiB/s in  2s ETA:  0s
info: installing component 'rustc'
 60.6 MiB /  60.6 MiB (100 %)  10.3 MiB/s in  5s ETA:  0s
info: installing component 'rustfmt'
info: checking for self-update

  stable-x86_64-pc-windows-msvc updated - rustc 1.70.0 (90c541806 2023-05-31) (from rustc 1.69.0 (84c898d65 2023-04-16))

info: cleaning up downloads & tmp directories
```

[1]: https://www.rust-lang.org/tools/install
[2]: https://visualstudio.microsoft.com/visual-cpp-build-tools/