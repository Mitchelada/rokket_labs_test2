import React, {useEffect, useState} from 'react'
import articlesAxios from '../../config/axios'
import { Table, Space, Popconfirm, Button , notification} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const { Column } = Table;

export const ArticlesScreen = () => {

    const [articles, setArticles] = useState([]);

    const consultarApi = async() => {
        const articlesConsulta = await articlesAxios.get('/articles')
        setArticles(articlesConsulta.data)
    }

    const handleDeleteElement = (idElement) =>{

        articlesAxios.delete(`/articles/${idElement}`)
        notification.success({
            placement: 'bottomRight',
            message: 'Article deleted!',
            description:
              'Deleted!',
            duration: 2
          })
        
    }

    useEffect(  () =>{
        consultarApi()
    },[articles])

    return (
        <div>
            <h1>Articles</h1>

            <Table dataSource={articles} scroll={{ y: 520 }} pagination={false}>,
                <Column title="Name" dataIndex="name" key={articles._id} />
                <Column
                        title="Action"
                        key="action"
                        width="15%"
                        render={(text, record) => (
                        <Space size="middle">
                            <Popconfirm title="Do you want to delete this element?"
                                        onConfirm={() => handleDeleteElement(record._id)}>
                            <Button icon={<DeleteOutlined/>} 
                                    type="danger">
                            </Button>
                            </Popconfirm>
                        </Space>
                        )}
                    />
            </Table>

        </div>
    )
}
