import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';
import { Users, Package, ShoppingCart, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">İdarə Paneli İcmalı</h2>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card>
            <Statistic
              title="Ümumi Müştərilər"
              value={1234}
              prefix={<Users className="w-4 h-4 mr-2" />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Məhsullar"
              value={456}
              prefix={<Package className="w-4 h-4 mr-2" />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Sifarişlər"
              value={789}
              prefix={<ShoppingCart className="w-4 h-4 mr-2" />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Gəlir"
              value={98765}
              prefix={<TrendingUp className="w-4 h-4 mr-2" />}
              precision={2}
              prefix="₼"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}