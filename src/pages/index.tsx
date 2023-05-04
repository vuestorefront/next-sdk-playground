import { useState } from 'react';
import { sdk } from './_app';
import { SfButton } from '@storefront-ui/react';
import { RenderJson } from '../../components/RenderJson';

export default function Home() {
  const [data, setData] = useState<null | Object>(null);

  const hitExampleMethodApi = async () => {
    const data = await sdk.boilerplate.exampleMethod('test');

    setData(data);
  };

  return (
    <>
      <main className="flex flex-col items-center py-24 gap-12  text-white">
        <h1 className="typography-headline-2 font-semibold">Welcome!</h1>
        <p className="typography-headline-3">
          Start building Vue Storefront SDK Integration Boilerplate
        </p>

        <p className="typography-headline-3">
          Make your first API call using SDK
        </p>
        <SfButton type="button" onClick={hitExampleMethodApi}>
          Call exampleMethod
        </SfButton>

        <div className="w-[500px] h-min-12 h-auto p-4 bg-gray-900 rounded-md flex items-center justify-center">
          {!data ? 'Click the button' : <RenderJson json={data} />}
        </div>
      </main>
    </>
  );
};
