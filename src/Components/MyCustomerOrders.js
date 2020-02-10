import React from 'react';
import { Table, Drawer, Button, Descriptions, Badge } from 'antd';
import './MyCustomerOrders.css';

class MyCustomerOrders extends React.Component {
    state = {
        visible: false,
        Listdata: []
    }
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        const columns = [
            {
                title: 'Customer',
                dataIndex: 'customer',
                key: 'customer',
                render: text => <Button type="link" onClick={this.showDrawer}>{text}</Button>
            },
            {
                title: 'Division',
                dataIndex: 'division',
                key: 'division',
            },
            {
                title: 'Product',
                dataIndex: 'product',
                key: 'product',
            },
            {
                title: 'Customer Order #',
                dataIndex: 'orderno',
                key: 'orderno',
                ellipsis: true
            },
            {
                title: 'Customer Purchase Order',
                dataIndex: 'customerpurchaseorder',
                key: 'customerpurchaseorder',
                ellipsis: true
            },
            {
                title: 'Vendor Purchase Order',
                dataIndex: 'vendorpurchaseorder',
                key: 'vendorpurchaseorder',
                ellipsis: true
            },
            {
                title: 'Customer Style No',
                dataIndex: 'styleno',
                key: 'styleno',

            },
            {
                title: 'Garment Color',
                dataIndex: 'garmentcolor',
                key: 'garmentcolor',
            },
            {
                title: 'Manufacturing Style',
                dataIndex: 'style',
                key: 'style',
                ellipsis: true
            },
            {
                title: 'Plan Delivery Date',
                dataIndex: 'pldate',
                key: 'pldate',
                ellipsis: true
            },
            {
                title: 'Embellishment',
                dataIndex: 'embellishment',
                key: 'embellishment',
            },
            {
                title: 'Manufacturing Order No',
                dataIndex: 'mon',
                key: 'mon',
            }
        ];

        const data = [
            {
                key: '1',
                customer: 'Calvin Klain',
                division: 'Mens',
                product: 'Under wear',
                orderno: '#45637',
                customerpurchaseorder: 'ML- Basic-May',
                garmentcolor: 'Blue',
                style: 'NB1565A',
                pldate: '10-3-2018',
                vendorpurchaseorder: '450003456',
                embellishment: 'Yes',
                mon: 'CB156E8'
            },
            {
                key: '2',
                customer: 'Calvin Klain',
                division: 'Female',
                product: 'Bra',
                orderno: '#45637',
                customerpurchaseorder: 'ML- Basic-May',
                garmentcolor: 'Blue',
                style: 'NB1565A',
                pldate: '10-3-2018',
                vendorpurchaseorder: '450003456',
                embellishment: 'Yes',
                mon: 'CB156E8'
            },
            {
                key: '3',
                customer: 'UCB',
                division: 'Mens',
                product: 'T Shirt',
                orderno: '#45637',
                customerpurchaseorder: 'ML- Basic-May',
                garmentcolor: 'Blue',
                style: 'NB1565A',
                pldate: '10-3-2018',
                vendorpurchaseorder: '450003456',
                embellishment: 'Yes',
                mon: 'CB156E8'
            },
            {
                key: '4',
                customer: 'Jack & Jones',
                division: 'Mens',
                product: 'Shirt',
                orderno: '#45637',
                customerpurchaseorder: 'ML- Basic-May',
                garmentcolor: 'Blue',
                style: 'NB1565A',
                pldate: '10-3-2018',
                vendorpurchaseorder: '450003456',
                embellishment: 'Yes',
                mon: 'CB156E8'
            },
            {
                key: '5',
                customer: 'Loui Vitton',
                division: 'Mens',
                product: 'Coat',
                orderno: '#45637',
                customerpurchaseorder: 'ML- Basic-May',
                garmentcolor: 'Blue',
                style: 'NB1565A',
                pldate: '10-3-2018',
                vendorpurchaseorder: '450003456',
                embellishment: 'Yes',
                mon: 'CB156E8'
            }
        ];

        const single = [
            {
                key: '1',
                customer: 'Calvin Klain',
                division: 'Mens',
                product: 'Under wear',
                orderno: '#45637',
                customerpurchaseorder: 'ML- Basic-May',
                garmentcolor: 'Blue',
                style: 'NB1565A',
                pldate: '10-3-2018',
                vendorpurchaseorder: '450003456',
                embellishment: 'Yes',
                mon: 'CB156E8'
            }
        ]
        return (
            <div>
                <Table columns={columns} dataSource={data} Expandable />
                <Drawer
                    width={640}
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    {single.map((item) => {
                        return (<Descriptions layout="horizontal" bordered
                            column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
                            <Descriptions.Item label="Customer Name" span={4}>{item.customer}</Descriptions.Item>
                            <Descriptions.Item label="Division" span={4}>{item.division}</Descriptions.Item>
                            <Descriptions.Item label="Product" span={4}>{item.product}</Descriptions.Item>
                            <Descriptions.Item label="Order No" span={4}>{item.orderno}</Descriptions.Item>
                            <Descriptions.Item label="Customer Purchase Order" span={4}>{item.customerpurchaseorder}</Descriptions.Item>
                            <Descriptions.Item label="Garment Color" span={4}>{item.garmentcolor}</Descriptions.Item>
                            <Descriptions.Item label="Style" span={4}>{item.style}</Descriptions.Item>
                            <Descriptions.Item label="Pl Date" span={4}>{item.style}</Descriptions.Item>
                            <Descriptions.Item label="Vendor Purchase Order" span={4}>{item.vendorpurchaseorder}</Descriptions.Item>
                            <Descriptions.Item label="embellishment" span={4}>{item.embellishment}</Descriptions.Item>
                            <Descriptions.Item label="Manufacturing Order No" span={4}>{item.mon}</Descriptions.Item>
                            <Descriptions.Item label="Status" span={3}>
                                <Badge status="processing" text="In Production.." />
                            </Descriptions.Item>
                        </Descriptions>)
                    })}
                </Drawer>
            </div>
        )
    }
}
export default MyCustomerOrders;