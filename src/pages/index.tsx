import { useState } from 'react';
import { sdk } from './_app';
import { SfButton, SfIconViewList } from '@storefront-ui/react';
import { RenderJson } from '@/components/RenderJson';
import { Card } from '@/components/Card';
import { Grid } from '@/components/Grid';
import { TabBrowser } from '@/components/CodeWithTab';
import { NumberTitle } from '@/components/NumberTitle';

export default function Home() {
  const [data, setData] = useState<null | Object>(null);

  const hitExampleMethodApi = async () => {
    const data = await sdk.boilerplate.exampleMethod('test');

    setData(data);
  };

  return (
    <>
      <main className="flex flex-col items-center md:pt-24 md:py-0 py-24 gap-12 text-white mb-44 md:mb-0">
        <h1 className="typography-headline-2 font-semibold text-primary-600">Welcome!</h1>
        <p className="typography-headline-4 text-center">
          Start building new Integration with Vue Storefront SDK Integration Boilerplate
        </p>
        <section className='flex flex-col gap-12 items-center'>
          <NumberTitle number={1} title='Make your first API call using SDK'>
            <SfButton type="button" onClick={hitExampleMethodApi} className='bg-primary-600 py-2 px-4'>
              Call exampleMethod
            </SfButton>
            <div className="w-[450px] h-min-12 h-auto p-4 bg-gray-600 rounded-md flex items-center justify-center">
              {!data ? 'Click the button' : <RenderJson json={data} />}
            </div>
          </NumberTitle>

          <NumberTitle number={2} title='Create new method using CLI'>
            <TabBrowser data={[
              {
                language: 'bash',
                commands: [
                  {
                    command: (
                      <>
                        npx
                        <span className='text-primary-600 mx-2'>@vue-storefront/cli</span>
                        add endpoint
                        <span className='text-primary-600 mx-2'>exampleMethod</span>
                      </>
                    ),
                    description: 'Add new method to the integration'
                  }
                ]
              }
            ]} />
          </NumberTitle>

          <NumberTitle number={3} title='Read documentation and start developing integration'>
            <Grid columns={2}>
              <Card icon={<SfIconViewList className="text-primary-600 w-8" />} title='SDK Documentation' description='General SDK Documentation' href="https://docs.vuestorefront.io" />
              <Card icon={<SfIconViewList className="text-primary-600 w-8" />} title='Integration Boilerplate' description='Integration Boilerplate documentation' href="https://docs.vuestorefront.io" />
            </Grid>
          </NumberTitle>
        </section>
      </main>
    </>
  );
};
