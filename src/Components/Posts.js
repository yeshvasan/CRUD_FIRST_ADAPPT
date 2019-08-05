import React from 'react';
import { List, Datagrid, TextField, ReferenceField, EditButton, Edit, SimpleForm, DisabledInput, ReferenceInput, SelectInput,TextInput, Create, LongTextInput } from 'react-admin';

export const PostList = props => (
    <List {...props}>
    
      <Datagrid>
          <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
          
         <EditButton />
        </Datagrid>
    </List>
);

export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
+           <DisabledInput source="title" />
            <ReferenceInput source="id" reference="id">
+               <SelectInput optionText="name" />
            </ReferenceInput>
-       
            <TextInput source="title" />
-           <TextInput source="body" />
+       
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="title" reference="id">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);

