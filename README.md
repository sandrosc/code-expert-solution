# Background

Our online IDE is able to store versioned data in an own db based file system. Meaning every change of a student or teacher will be stored as an own version. 
To achieve this we store metadata objects for each file and directory in the file system to our db. 
For every version one object. The metadata includes the following relevant files:

- type: The mime type of the file (`inode/directory` for directories).
- name: The name of the file or directory.
- current: is `true`, if this is the most current version of the file or directory.
- key: an id for the file or directory, whereas all versions of the same file have the same key.
- permissions: A object, which stores the access rights ("read" for read access and "write" for write access).
- children: Only for directories: An array of keys from files or directories, which are currently children of this directory.

The root directory has the special name: "."

# You task

Write your code in javascript/typescript (either browser or nodejs).

Provided an array of metadata objects as described above, your task is to display the project tree, as seen by a student at the current timepoint (`current === true`).
You are free to choose how you want to print the project tree (console is good enough for us).
If a student should not be able to read the file/directory, this should not show up in the project tree.
If a file/directory is readable but not writeable, append the name with " (r)".

# Provided files

You find an example dump from our database (data.json), and the expected outcome (expected_output.txt) in this repo.

# How to hand in.

Send us your solution in a way you find the most suitable. 
