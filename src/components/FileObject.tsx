import React from 'react';
import { BuiltDirectory } from '../fileTree';
import { File, Role } from '../file';

export function FileObject({ fileObject }: { fileObject: File | BuiltDirectory }) {
  const hasWritePermissions =
    fileObject.permissions.write.includes(Role.Student) || fileObject.permissions.write.includes(Role.Everyone);
  const fileName = hasWritePermissions ? fileObject.name : `${fileObject.name} (r)`;

  return <div>{fileName}</div>;
}
