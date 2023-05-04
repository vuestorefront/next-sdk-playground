
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';

type ResponseData = {
  methodRoutes: Object
}

const methodsDir = '../app/src/pages/methods';

const listRoutes = () => {
   const isDirectoryExist = fs.existsSync(methodsDir);

  if (!isDirectoryExist) {
    return [];
  }
  
  const files = fs.readdirSync(methodsDir);
  const tsFiles = files.filter((file) => file.endsWith('.tsx'));
  const filePaths = tsFiles.map((file) => removeTsxExtension(file));
  return filePaths;
};

const removeTsxExtension = (filename: string): string => {
  const extensionToRemove = '.tsx';
  if (filename.endsWith(extensionToRemove)) {
    return filename.slice(0, -extensionToRemove.length);
  }
  return filename;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const routeList = listRoutes();
  const methodRoutes = routeList.map((route) => {
    return {
      name: route,
      path: '/methods/' + route
    }
  })
  res.status(200).json({methodRoutes})
}
