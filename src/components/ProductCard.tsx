import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Card, Col, Row, Tag, Typography } from 'antd';
import { random } from 'lodash';

import { Product } from '#/types';

interface Props {
  product: Partial<Product>;
  showPrice?: boolean;
  showStatus?: boolean;
  showQuantity?: boolean;
  onEdit?: (product: Partial<Product>) => void;
  onDelete?: (product: Partial<Product>) => void;
}

export const ProductCard = ({
  product,
  showPrice = false,
  showStatus = false,
  showQuantity = false,
  onEdit,
  onDelete,
}: Props) => {
  const { productName, price, description, status, quantity } = product;
  return (
    <Card
      className='w-80 rounded-md overflow-hidden border-none shadow-xl'
      cover={
        <img
          width={320}
          height={240}
          src={`https://picsum.photos/id/${random(1000)}/320/240`}
        />
      }
      actions={[
        <Row
          gutter={10}
          justify='center'
          className='text-green-600'
          onClick={() => onEdit?.(product)}
        >
          <Col>
            <EditOutlined />
          </Col>
          <Col>Edit</Col>
        </Row>,
        <Row
          gutter={10}
          justify='center'
          className='text-red-600'
          onClick={() => onDelete?.(product)}
        >
          <Col>
            <DeleteOutlined />
          </Col>
          <Col>Delete</Col>
        </Row>,
      ]}
    >
      <Card.Meta
        title={<Typography.Title level={4}>{productName}</Typography.Title>}
        description={
          <Typography.Paragraph ellipsis={{ rows: 2 }} className='h-11'>
            {description}
          </Typography.Paragraph>
        }
      />

      {showPrice && (
        <Typography className='font-semibold text-red-600 text-lg'>
          {(price ?? 0).toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
          })}
        </Typography>
      )}

      {showQuantity && (
        <div className='font-semibold text-lg'>Quantity: {quantity}</div>
      )}

      {showStatus && (
        <Tag className='mt-2' color={status ? 'green' : 'gray'}>
          {status ? 'Active' : 'Disabled'}
        </Tag>
      )}
    </Card>
  );
};