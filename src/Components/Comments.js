import React from 'react';
import { Card, CardHeader, TextField, DateField, Avatar, PersonIcon, CardText, ReferenceField, CardActions, EditButton, List} from 'admin-on-rest';


const cardStyle = {
    width: 300,
    minHeight: 300,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top'
};
const CommentGrid = ({ ids, data, basePath }) => (
  
        <div style={{ margin: '1em' }}>
    {ids.map(id =>
    
        <Card key={id} style={cardStyle}>
            <CardHeader
                title={<TextField record={data[id]} source="author.name" />}
                subtitle={<DateField record={data[id]} source="created_at" />}
                avatar={<Avatar icon={<PersonIcon />} />}
            />
            <CardText>
                <TextField record={data[id]} source="body" />
            </CardText>
            <CardText>
                about&nbsp;
                <ReferenceField label="Post" resource="comments" record={data[id]} source="post_id" reference="posts" basePath={basePath}>
                    <TextField source="title" />
                </ReferenceField>
            </CardText>
            <CardActions style={{ textAlign: 'right' }}>
                <EditButton resource="posts" basePath={basePath} record={data[id]} />
            </CardActions>
        </Card>
    )}
    </div>
  
);
CommentGrid.defaultProps = {
    data: {},
    ids: [],
};

const CommentList = (props) => (
    <List title="All comments" {...props}>
        <CommentGrid />
    </List>
);


export default CommentList;