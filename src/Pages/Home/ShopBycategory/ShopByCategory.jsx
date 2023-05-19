import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const ShopByCategory = () => {
    return (
        <div className='text-center mt-10'>
            <Tabs>
                <TabList>
                    <Tab>Animels</Tab>
                    <Tab>Dolls.</Tab>
                    <Tab>Electronic toys.</Tab>
                </TabList>
                <TabPanel>
                    <h2>Any content 1</h2>
                    <h2>any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                    <h2>any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                    <h2>any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;