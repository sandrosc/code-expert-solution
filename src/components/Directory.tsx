import React from 'react';
import { BuiltDirectory } from '../fileTree';
import { File, Role } from '../file';
import { FileObject } from './FileObject';
import './Directory.css';

export default function Directory({ directory }: { directory: BuiltDirectory }) {
  const children = directory.children.filter(
    child => child.permissions.read.includes(Role.Student) || child.permissions.read.includes(Role.Everyone)
  );

  const directoryChildren = children.filter(child => isDirectory(child)).sort(sortByLowerCaseName) as BuiltDirectory[];
  const fileChildren = children.filter(child => !isDirectory(child)).sort(sortByLowerCaseName) as File[];

  return (
    <div className="Directory">
      <div>
        <FileObject fileObject={directory} />
      </div>
      <div className="children">
        {directoryChildren.map(directory => (
          <Directory key={directory.key} directory={directory} />
        ))}
        {fileChildren.map(file => (
          <FileObject key={file.key} fileObject={file} />
        ))}
      </div>
    </div>
  );
}

function sortByLowerCaseName({ name: a }: { name: string }, { name: b }: { name: string }) {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  } else if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  } else {
    return 0;
  }
}

function isDirectory(fileObject: File | BuiltDirectory): fileObject is BuiltDirectory {
  return 'children' in fileObject;
}
