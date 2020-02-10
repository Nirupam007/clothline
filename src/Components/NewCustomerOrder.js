import React from 'react';
import './NewCustomerOrder.css';
import { Form, Row, Col, Input, Typography, Select, DatePicker, Upload, Button, Icon, Modal, Drawer, InputNumber } from 'antd';
const pStyle = {
    fontSize: 16,
    color: 'rgba(0,0,0,0.85)',
    lineHeight: '24px',
    display: 'block',
    marginBottom: 16,
};

const DescriptionItem = ({ title, content }) => (
    <div
        style={{
            fontSize: 14,
            lineHeight: '22px',
            marginBottom: 7,
            color: 'rgba(0,0,0,0.65)',
        }}
    >
        <p
            style={{
                marginRight: 8,
                display: 'inline-block',
                color: 'rgba(0,0,0,0.85)',
            }}
        >
            {title}:
      </p>
        {content}
    </div>
);

class NewCO extends React.Component {
    state = {
        size: 'default',
        visible: false
    };
    dateChange = (date, dateString) => {
        console.log(date, dateString);
    }
    deliveryDate = (date, dateString) => {
        console.log(date, dateString);
    }
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onChangeSMV(value) {
        console.log('changed', value);
    }
    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render() {
        const { Title } = Typography;
        const { Option } = Select;

        const fileList = [
            {
                uid: '-1',
                name: 'logo.png',
                status: 'done',
                url: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/CK_Calvin_Klein_logo.svg',
                thumbUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/CK_Calvin_Klein_logo.svg',
            }
        ];



        const props = {
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            listType: 'picture',
            defaultFileList: [...fileList],
            className: 'upload-list-inline',
        };


        const children = [];
        const types = [
            { type: 'Full' },
            { type: 'Semi' }
        ]
        for (var i = 0; i < types.length; i++) {
            children.push(<Option key={i}>{`${i}-${types[i].type}-garment`}</Option>);
        }

        return (
            <div>
                <div>
                    <Title level={4}>NEW CUSTOMER ORDER <Button type="link" onClick={this.showModal}>Teck Pack</Button></Title>
                    <Form layout="vertical">
                        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                    <Form.Item label="Customer Name">
                                        <Input placeholder="Eg. Calvin Klein" />
                                    </Form.Item>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                    <Form.Item label="Manufactering Style">
                                        <Input placeholder="Eg. CB1565B8" />
                                    </Form.Item>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                    <Form.Item label="Customer Division">
                                        <Select defaultValue="Mens"  >
                                            <Option value="Mens">Men</Option>
                                            <Option value="Womens">Women</Option>
                                        </Select>
                                    </Form.Item>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                    <Form.Item label="Planned Delivery Date">
                                        <DatePicker onChange={this.dateChange} />
                                    </Form.Item>
                                </div>
                            </Col>
                        </Row>
                        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                    <Form.Item label="Product">
                                        <Select defaultValue="Bra"  >
                                            <Option value="Bra">Bra</Option>
                                            <Option value="Panty">Panty</Option>
                                            <Option value="Shirt">Shirt (Men)</Option>
                                            <Option value="Pant">Pant (Women)</Option>
                                        </Select>
                                    </Form.Item>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                    <Form.Item label="Customer Order No">
                                        <Input placeholder="Eg. 2675784993" />
                                    </Form.Item>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                    <Form.Item label="Customer Purchase Order">
                                        <Input placeholder="Eg. ML- Basic-May" />
                                    </Form.Item>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                    <Form.Item label="Embellishment">
                                        <Select defaultValue="No"  >
                                            <Option value="yes">Yes</Option>
                                            <Option value="no">No</Option>
                                        </Select>
                                    </Form.Item>
                                </div>
                            </Col>
                        </Row>
                        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                    <Form.Item label="Vendor Purchase Order">
                                        <Input placeholder="Eg. 4500238400" />
                                    </Form.Item>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                    <Form.Item label="Manufactering Order No">
                                        <Input placeholder="Eg. 23475843002" />
                                    </Form.Item>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                    <Form.Item label="Garment Color">
                                        <Input placeholder="Eg. #456372" />
                                    </Form.Item>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                    <Form.Item label="Customer Style No">
                                        <Input placeholder="Eg. NB1565A" />
                                    </Form.Item>
                                </div>
                            </Col>
                        </Row>
                        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                    <Form.Item label="Mode">
                                        <Select defaultValue="Air"  >
                                            <Option value="air">Air</Option>
                                            <Option value="sea">Sea</Option>
                                            <Option value="road">Road</Option>
                                        </Select>
                                    </Form.Item>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                    <Form.Item label="Embellishment Type">
                                        <Select
                                            mode="multiple"
                                            size={this.state.size}
                                            placeholder="Please select"
                                            defaultValue={['Semi-Garment']}
                                            style={{ width: '100%' }}
                                        >
                                            {children}
                                        </Select>
                                    </Form.Item>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                    <Upload {...props}>
                                        <Button>
                                            <Icon type="upload" /> Upload
                                        </Button>
                                    </Upload>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                    <Modal
                        title="Teck Pack"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    ><img src="https://www.techpacktemplates.com/images/products/TPPa0171image1.jpg" alt="Tec Pack" style={{ width: '100%', height: '100%' }} />
                    </Modal>
                </div>
                <div>
                    <Row>
                        <Col span={24}> <Title level={4}>PRODUCTION  DETAILS</Title></Col>
                    </Row>
                    <Row >
                        <Button type="primary" style={{ float: 'right' }}>+ Add Size(s)</Button>
                    </Row>
                    <Form layout="vertical">
                        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
                            <Col className="gutter-row" span={4}>
                                <div className="gutter-box">
                                    <Form.Item label="Size">
                                        <Select defaultValue="S"  >
                                            <Option value="S">S</Option>
                                            <Option value="M">M</Option>
                                            <Option value="L">L</Option>
                                            <Option value="XL">XL</Option>
                                            <Option value="XXL">XXL</Option>
                                        </Select>
                                    </Form.Item>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={4}>
                                <div className="gutter-box">
                                    <Form.Item label="Order Quantity">
                                        <Input placeholder="Eg. 445" />
                                    </Form.Item>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={4}>
                                <div className="gutter-box">
                                    <Form.Item label="Destination">
                                        <Input placeholder="Eg. USA" />
                                    </Form.Item>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={4}>
                                <div className="gutter-box">
                                    <Form.Item label="Packaging Method">
                                        <Select defaultValue="1 PC"  >
                                            <Option value="1">1 PC</Option>
                                            <Option value="2">2 PC</Option>
                                            <Option value="3">3 PC</Option>
                                        </Select>
                                    </Form.Item>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box" style={{ marginTop: "18px" }}>
                                    <Button><Icon type="delete" style={{ color: '#eb2f96' }} /></Button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="gutter-row" span={24} style={{ textAlign: 'center' }}>
                                <Button style={{ marginRight: "20px" }}>CLEAR</Button>
                                <Button type="primary" style={{ marginRight: "20px" }}>SAVE</Button>
                                <Button onClick={this.showDrawer}>ESTIMATE PRODUCTION DATE PLAN</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
                <Drawer
                    width={640}
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p style={{ ...pStyle, marginBottom: 24 }}>ESTIMATE PRODUCTION DATE PLAN</p>
                    <Form onSubmit={this.handleSubmit}>
                        <Form layout="horizontal" onSubmit={this.handleSubmit}>
                            <Form.Item label="Standard Min Value">
                                <InputNumber min={1} max={10} defaultValue={3} onChange={this.onChangeSMV} style={{ width: '100%' }} />
                            </Form.Item>
                            <Row>
                                <Col span={24}>
                                    <DescriptionItem title="Total Order Required Time(Mins) x 271" content="xxxx" />
                                </Col>
                                <Col span={24}>
                                    <DescriptionItem title="Total Order Required Time(Hours x 60 x 60)" content="xxxxx" />
                                </Col>
                                <Col span={24}>
                                    <DescriptionItem title="Total Order Required Time(Days x 8)" content="xxxxx" />
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="Delivery Date">
                                        <DatePicker onChange={this.deliveryDate} />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="Production Start Date">
                                        <DatePicker onChange={this.deliveryDate} />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="Plan Cut Date">
                                        <DatePicker onChange={this.deliveryDate} />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="Material Inhouse (Before)">
                                        <DatePicker onChange={this.deliveryDate} />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="Manufactering Purchase Order (Before)">
                                        <DatePicker onChange={this.deliveryDate} />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="gutter-row" span={24} style={{ textAlign: 'center' }}>
                                    <Button style={{ marginRight: "20px" }}>REJECT ORDER</Button>
                                    <Button type="primary" style={{ marginRight: "20px" }}>CONFIRM ORDER</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Form>

                </Drawer>
            </div>


        );
    }
}
export default NewCO;