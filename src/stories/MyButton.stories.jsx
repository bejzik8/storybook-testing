import Button from '../components/Button'

export default {
    title: 'PJCT/Mirkos Button',
    component: Button
}

const Template = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Click me'
}

export const Red = Template.bind({})
Red.args = {
  text: 'Click me',
  backgroundColor: 'red'
}

export const Blue = () => <Button text='Blue' backgroundColor='azure' />