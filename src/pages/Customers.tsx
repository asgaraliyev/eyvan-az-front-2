import React from 'react';
import { Table, Button, Space, Input } from 'antd';
import { Plus } from 'lucide-react';
import type { Customer } from '../types';

export default function Customers() {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Ad',
      dataIndex: ['user', 'firstname'],
      key: 'firstname',
      sorter: (a: Customer, b: Customer) => 
        a.user?.firstname.localeCompare(b.user?.firstname || '') || 0,
    },
    {
      title: 'Soyad',
      dataIndex: ['user', 'lastname'],
      key: 'lastname',
      sorter: (a: Customer, b: Customer) => 
        a.user?.lastname.localeCompare(b.user?.lastname || '') || 0,
    },
    {
      title: 'Əməliyyatlar',
      key: 'actions',
      render: (_: any, record: Customer) => (
        <Space>
          <Button type="link">Sifarişlərə bax</Button>
          <Button type="link">Düzəliş et</Button>
          <Button type="link" danger>Sil</Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Müştərilər</h2>
        <Button type="primary" icon={<Plus className="w-4 h-4" />}>
          Müştəri əlavə et
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={[]}
        rowKey="id"
      />
    </div>
  );
}