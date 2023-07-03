# Cargo

Cargo is the Rust package manager, which allows you to create new packages, and also to install existing ones.

## Creating a new package

By default a binary package is created using the `cargo new` command:

```shell
$ cargo new my_executable
```

This is equivalent to running the command with the `--bin` argument:

```shell
$ cargo new my_executable --bin
```

A library package can also be created with the `--lib` argument:

```shell
$ cargo new my_library --lib
```