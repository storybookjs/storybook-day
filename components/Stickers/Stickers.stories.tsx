import type { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';
import { userEvent, within, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Layout } from '@components/Layout';
import { withPrefix } from '@lib/with-prefix';
import { Stickers } from './Stickers';

const meta: Meta<typeof Stickers> = {
  title: 'Pages/Stickers/Stickers',
  component: Stickers,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'gradient' }
  },
  decorators: [
    storyFn => (
      <Layout showFooter={false} layoutStyle="full">
        {storyFn()}
      </Layout>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Stickers>;

async function fillForm(canvas: any) {
  await userEvent.type(canvas.getByLabelText('Address'), '996 Lakeshore Boulevard', { delay: 5 });
  await userEvent.type(canvas.getByLabelText('Apartment/Suite'), 'Unit 541', { delay: 5 });
  await userEvent.type(canvas.getByLabelText('City/town'), 'Toronto', { delay: 5 });
  await userEvent.type(canvas.getByLabelText('State/province/region'), 'Ontario', { delay: 5 });
  await userEvent.type(canvas.getByLabelText('Postal/Zip code'), 'M5A 1J4', { delay: 5 });
  await userEvent.type(canvas.getByLabelText('Country'), 'Canada', { delay: 5 });

  const submitButton = canvas.getByText('Send me stickers');
  userEvent.click(submitButton);

  return { submitButton };
}

export const Default: Story = {
  args: {
    username: 'rashy',
    name: 'Marcus Rashford'
  }
};

export const Loading: Story = {
  ...Default,
  parameters: {
    msw: {
      handlers: [
        rest.post(withPrefix('/api/save-shipping-info'), (req, res, ctx) => {
          return res(ctx.delay(1000 * 60 * 60 * 60), ctx.json('Request was received'));
        })
      ]
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await fillForm(canvas);
    // const { submitButton } = await fillForm(canvas);
    // await waitFor(() => expect(submitButton).toBeDisabled());
  }
};

export const Success: Story = {
  ...Default,
  parameters: {
    msw: {
      handlers: [
        rest.post(withPrefix('/api/save-shipping-info'), (req, res, ctx) => {
          return res(ctx.json('Request was received'));
        })
      ]
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await fillForm(canvas);

    const successMessage = await canvas.findByText(/Your request was received!/i);
    expect(successMessage).toBeVisible();
  }
};

export const Error: Story = {
  ...Default,
  parameters: {
    msw: {
      handlers: [
        rest.post(withPrefix('/api/save-shipping-info'), (req, res, ctx) => {
          return res(
            ctx.status(400),
            ctx.json({
              error: {
                code: 'bad_input',
                message: 'Invalid parameters'
              }
            })
          );
        })
      ]
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await fillForm(canvas);
  }
};

export const UserNotFound: Story = {
  ...Default,
  parameters: {
    msw: {
      handlers: [
        rest.post(withPrefix('/api/save-shipping-info'), (req, res, ctx) => {
          return res(
            ctx.status(400),
            ctx.json({
              error: {
                message: 'The registration does not exist. Please register for the event first.'
              }
            })
          );
        })
      ]
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await fillForm(canvas);
  }
};
