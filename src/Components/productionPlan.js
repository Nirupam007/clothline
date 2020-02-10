import React from 'react';
import { Drawer, Form, InputNumber } from 'antd';
class productionPlan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            show: false
        };
    }
    showDrawer = () => {
        this.setState({
            show: true
        });
    };
    onChangeSMV = (value) => {
        console.log('changed', value);
    }
    onClose = () => {
        this.setState({
            show: false,
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

        return (
            <div>
                <Drawer
                    width={640}
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p style={{ ...pStyle, marginBottom: 24 }}>User Profile</p>
                    <p style={pStyle}>Personal</p>
                    <Form layout="vertical" onSubmit={this.handleSubmit}>
                        <Form.Item label="Standard Min Value">/>
                        <InputNumber min={1} max={10} defaultValue={3} onChange={this.onChangeSMV} />
                        </Form.Item>
                    </Form>

                </Drawer>
            </div>
        );
    }
}
export default productionPlan;