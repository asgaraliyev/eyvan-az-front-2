import React from 'react';
import { Layout as AntLayout, Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, Package, ShoppingCart } from 'lucide-react';

const { Header, Sider, Content } = AntLayout;

export default function Layout() {
  const navigate = useNavigate();

  const menuItems = [
    {
      key: '/',
      icon: <LayoutDashboard className="w-4 h-4" />,
      label: 'İdarə Paneli',
    },
    {
      key: '/customers',
      icon: <Users className="w-4 h-4" />,
      label: 'Müştərilər',
    },
    {
      key: '/products',
      icon: <Package className="w-4 h-4" />,
      label: 'Məhsullar',
    },
    {
      key: '/orders',
      icon: <ShoppingCart className="w-4 h-4" />,
      label: 'Sifarişlər',
    },
  ];

  return (
    <AntLayout className="min-h-screen">
      <Sider theme="light" className="shadow-sm">
        <div className="h-16 flex items-center justify-center text-xl font-bold">
          Eyvan.az
        </div>
        <Menu
          mode="inline"
          items={menuItems}
          onClick={({ key }) => navigate(key)}
        />
      </Sider>
      <AntLayout>
        <Header className="bg-white px-6 flex items-center justify-between shadow-sm">
          <h1 className="text-lg font-semibold">E-ticarət İdarə Paneli</h1>
        </Header>
        <Content className="m-6 p-6 bg-white rounded-lg">
          <Outlet />
        </Content>
      </AntLayout>
    </AntLayout>
  );
}
