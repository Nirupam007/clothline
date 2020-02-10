import React from 'react';
import { Tabs, Button } from 'antd';
import MyCustomerOrders from './MyCustomerOrders';
import NewCustomerOrder from './NewCustomerOrder';
import './TabContent.css';
class TabContent extends React.Component {
    render() {
        const { TabPane } = Tabs;
        const operations = <Button>Export to Excel</Button>;
        return (
            <div className="Tabs-Info">
                <Tabs tabBarExtraContent={operations}>
                    <TabPane tab="MY CUSTOMER ORDER(S)" key="1">
                        <MyCustomerOrders />
                    </TabPane>
                    <TabPane tab="ALL CUSTOMER ORDER(S)" key="2">
                        <MyCustomerOrders />
                    </TabPane>
                    <TabPane tab="CREATE NEW CUSTOMER ORDER" key="3">
                        <NewCustomerOrder />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default TabContent;