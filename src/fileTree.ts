import files from './data.json';
import { File, Directory } from './file';

const currentFiles = files.filter(file => file.current) as (File | Directory)[];
const rootDir = currentFiles.find(file => file.name === '.') as Directory;

const fileMap = new Map(currentFiles.map(file => [file.key, file]));

export default buildDirectory(rootDir);

function buildDirectory(directory: Directory): BuiltDirectory {
  return {
    ...directory,
    children: directory.children
      .map(child => fileMap.get(child)! ?? console.warn(`file with id ${child} not found`))
      .filter(childFile => childFile)
      .map(childFile => (isDirectory(childFile) ? buildDirectory(childFile) : childFile))
  };
}

function isDirectory(fileObject: File | Directory): fileObject is Directory {
  return 'children' in fileObject;
}

export interface BuiltDirectory extends Omit<Directory, 'children'> {
  children: (File | BuiltDirectory)[];
}
