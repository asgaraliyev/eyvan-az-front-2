import React from 'react';
import { Table, Button, Space, Input, message } from 'antd';
import { Plus } from 'lucide-react';
import type { Product } from '../types';

export default function Products() {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Ad',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: Product, b: Product) => a.name.localeCompare(b.name),
    },
    {
      title: 'Stok',
      dataIndex: 'stock',
      key: 'stock',
      sorter: (a: Product, b: Product) => a.stock - b.stock,
    },
    {
      title: 'Əməliyyatlar',
      key: 'actions',
      render: (_: any, record: Product) => (
        <Space>
          <Button type="link">Düzəliş et</Button>
          <Button type="link" danger>Sil</Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Məhsullar</h2>
        <Button type="primary" icon={<Plus className="w-4 h-4" />}>
          Məhsul əlavə et
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