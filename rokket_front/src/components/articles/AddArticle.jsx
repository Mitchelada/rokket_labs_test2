import React, {useState} from 'react'
import { Input, Button,Row,Col, notification } from 'antd';
import { FileAddOutlined } from '@ant-design/icons';
import articleAxios from '../../config/axios'

export const AddArticle = () => {

    const [element, setElement] = useState({name:""});


    const handleKeep = (e) =>{
        setElement({
            name:e.target.value
        })
    }

    const handleAdd = (e) =>{

        if(element.name.length === 0){
            return 
        }

        e.preventDefault()
        articleAxios.post('/articles',element).then(res =>{
            console.log(res);
        })

        setElement({name:""})

        notification.success({
            placement: 'bottomRight',
            message: 'Article Added!',
            description:
              'Added!',
            duration: 2
          })
    }


    return (
        <div style={{paddingLeft: "20px"}}>

            <Row >
                <Col className="gutter-row" span={6}>
                    <Input placeholder="Add an article" value={element.name}  onChange ={handleKeep} prefix={<FileAddOutlined />}  />
                </Col>
                <Col className="gutter-row" onClick={handleAdd} span={6}>
                    <Button type="primary">Add</Button>
                </Col>
            </Row>

        </div>
    )
}

