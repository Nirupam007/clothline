import React from 'react';
import { Drawer, Divider, Col, Row, Avatar } from 'antd';
class EachOrder extends React.Component {
    constructor() {
        super();
        this.state = { visible: true };
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
        const pStyle = {
            fontSize: 16,
            color: 'rgba(0,0,0,0.85)',
            lineHeight: '24px',
            display: 'block',
            marginBottom: 16,
        };
        console.log(this.props.status);
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


        return (
            <div>
                <Drawer
                    width={640}
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p style={{ ...pStyle, marginBottom: 24 }}>CUSTOMER ORDER DETAILS</p>
                    <Row>
                        <Col span={24}>
                            <DescriptionItem title="Customer Name" content="Calvin Klein" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Account" content="AntDesign@example.com" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="City" content="HangZhou" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Country" content="China🇨🇳" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Birthday" content="February 2,1900" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Website" content="-" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <DescriptionItem
                                title="Message"
                                content="Make things:simple as possible but no simpler."
                            />
                        </Col>
                    </Row>
                    <Divider />
                    <p style={pStyle}>Company</p>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Position" content="Programmer" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Responsibilities" content="Coding" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Department" content="XTech" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <DescriptionItem
                                title="Skills"
                                content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
                            />
                        </Col>
                    </Row>
                    <Divider />
                    <p style={pStyle}>Contacts</p>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Email" content="AntDesign@example.com" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <DescriptionItem
                                title="Github"
                                content={
                                    <a href="http://github.com/ant-design/ant-design/">
                                        github.com/ant-design/ant-design/
                      </a>
                                }
                            />
                        </Col>
                    </Row>
                </Drawer>
            </div>
        );
    }
}
export default EachOrder;