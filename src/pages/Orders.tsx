import React from 'react';
import { Table, Button, Space, Tag } from 'antd';
import type { Order } from '../types';

export default function Orders() {
  const columns = [
    {
      title: 'Sifariş ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Müştəri',
      dataIndex: ['customer', 'user', 'firstname'],
      key: 'customer',
      render: (_: any, record: Order) => (
        `${record.customer?.user?.firstname} ${record.customer?.user?.lastname}`
      ),
    },
    {
      title: 'Məhsul',
      dataIndex: ['product', 'name'],
      key: 'product',
    },
    {
      title: 'Əməliyyatlar',
      key: 'actions',
      render: (_: any, record: Order) => (
        <Space>
          <Button type="link">Ətraflı bax</Button>
          <Button type="link" danger>Ləğv et</Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Sifarişlər</h2>
      </div>
      <Table
        columns={columns}
        dataSource={[]}
        rowKey="id"
      />
    </div>
  );
}