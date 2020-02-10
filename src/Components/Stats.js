import React from 'react';
import { Layout, Typography, Row, Col, Select } from 'antd';
import './Stats.css';

class Stats extends React.Component {

    constructor(props) {
        super();
        this.state = { name: 'Bill' };

    }

    render() {
        const { Content } = Layout;
        const { Title, Text } = Typography;
        const { Option } = Select;
        //  console.log('I captured the props :' + this.props);
        const handleChange = (value) => {
            console.log(`selected ${value}`);
        }

        return (
            <Layout style={{ background: '#fff' }}>
                <Content>
                    <div style={{ padding: '20px 0', margin: 0, background: '#fff' }}>
                        <div className="page-title">
                            <Row type="flex" justify="center">
                                <Col span={1} xs={24} sm={4} md={3} lg={8}>
                                    <Title level={4} style={{ textTransform: 'uppercase' }}>Customer Order Overview</Title>
                                </Col>
                                <Col span={1} xs={24} sm={4} md={3} lg={2}>
                                    <Select defaultValue="Last 30 days" style={{ width: 120 }} onChange={handleChange}>
                                        <Option value="30days">Last 30 Days</Option>
                                        <Option value="thismonth">This Month</Option>
                                        <Option value="thisyear">This Year</Option>
                                    </Select>
                                </Col>
                            </Row>


                        </div>
                        <div className="stats-container">
                            <Row type="flex" justify="center">
                                <Col span={1} xs={24} sm={4} md={3} lg={4} className="alignCenter">
                                    <div style={{ borderRight: 'solid 1px #e5e5e5' }}>
                                        <Title level={4} >200</Title>
                                        <Text strong>Total CO Creation {this.state.name}</Text>
                                    </div>
                                </Col>
                                <Col span={1} xs={24} sm={4} md={5} lg={4} className="alignCenter">
                                    <div style={{ borderRight: 'solid 1px #e5e5e5' }}>
                                        <Title level={4} >33</Title>
                                        <Text strong>CO Cost Sheet Done</Text>
                                    </div>
                                </Col>
                                <Col span={1} xs={24} sm={4} md={5} lg={4} className="alignCenter">
                                    <div style={{ borderRight: 'solid 1px #e5e5e5' }}>
                                        <Title level={4} >193</Title>
                                        <Text strong>CO Approved</Text>
                                    </div>
                                </Col>
                                <Col span={1} xs={24} sm={4} md={5} lg={4} className="alignCenter">
                                    <div style={{ borderRight: 'solid 1px #e5e5e5' }}>
                                        <Title level={4} >3</Title>
                                        <Text strong>CO On Hold</Text>
                                    </div>
                                </Col>
                                <Col span={1} xs={24} sm={4} md={5} lg={4} className="alignCenter">
                                    <div style={{ border: '0' }}>
                                        <Title level={4} >77</Title>
                                        <Text strong>CO Rejected</Text>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Content>
            </Layout>
        )
    }
}

export default Stats;
