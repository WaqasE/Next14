import { Flex, Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  return <Flex gap="middle" wrap><p className='text-md font-bold text-blue-900 p-4'>Boiler By Waqas.</p></Flex>;
}
