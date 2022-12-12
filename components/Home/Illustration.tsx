import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { FC } from 'react';

const { pageMargins } = styles;

const Container = styled.div`
  ${pageMargins};
`;

export const Illustration: FC = props => <Container {...props} />;
