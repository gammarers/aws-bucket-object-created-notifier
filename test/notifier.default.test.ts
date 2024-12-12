import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { BukectObjectCreatedNotifier } from '../src';

describe('Notifier default Testing', () => {

  const app = new App();
  const stack = new Stack(app, 'TestStack');

  new BukectObjectCreatedNotifier(stack, 'BukectObjectCreatedNotifier');

  const template = Template.fromStack(stack);

  it('Should match snapshot', () => {
    expect(template.toJSON()).toMatchSnapshot();
  });
});