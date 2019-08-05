import React from 'react';
import { Pagination } from 'react-admin';

const PostPagination = props => <Pagination rowsPerPageOptions={[5,15,25]} {...props} />


export default PostPagination;