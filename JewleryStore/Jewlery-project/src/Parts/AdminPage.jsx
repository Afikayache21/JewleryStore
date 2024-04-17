import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from './ShopContext';
import Alert from './Alert';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Input } from '@mui/material';

const columns = [
    { id: 'image', label: 'Image' },
    { id: 'title', label: 'Title' },
    { id: 'price', label: 'Price' },
    { id: 'quantity', label: 'Quantity' },
    { id: 'total', label: 'Total' },
];

export default function StickyHeadTable() {

    const { shopList, addToShop, removeFromShop, clearShop, setShopList } = useContext(ShopContext);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showAlert, setShowAlert] = useState(false); // State variable to control the visibility of the alert
    const [isEdit, setIsEdit] = useState(false);
    const navigate = useNavigate(); // Use the useNavigate hook here

    useEffect(() => {
        setTotalPrice(shopList.reduce((total, item) => total + item.price * item.quantity, 0));
    }, [shopList]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const increaseQuantity = (item) => {
        const index = shopList.findIndex((Item) => Item.id === item.id);
        if (index !== -1) {
            const updatedList = [...shopList];
            updatedList[index] = { ...updatedList[index], quantity: updatedList[index].quantity + 1 };
            setShopList(updatedList);
        }
    };

    const decreaseQuantity = (item) => {
        if (item.quantity === 1) {
            removeFromShop(item);
        } else {
            const index = shopList.findIndex((Item) => Item.id === item.id);
            if (index !== -1) {
                const updatedList = [...shopList];
                updatedList[index] = { ...updatedList[index], quantity: updatedList[index].quantity - 1 };
                setShopList(updatedList);
            }
        }
    };

    return (
        <div style={{ paddingLeft: '25%', paddingRight: '25%', paddingTop: '5%' }}>
            {showAlert && <Alert message="Item added to cart" />} {/* Render the alert when showAlert is true */}
            <Paper sx={{ overflow: 'hidden', marginBottom: '5%' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell key={column.id} align="center" style={{ minWidth: column.minWidth }}>
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {shopList
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((item) => (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={item.id}>
                                        <TableCell align="center">
                                            <img src={item.images[0]} alt={item.title} style={{ width: 50, height: 50 }} />
                                        </TableCell>
                                        <TableCell align="center">{item.isEdit? <input name='title' placeholder='title'/>:item.title}</TableCell>
                                        <TableCell align="center">{item.isEdit? <input name='price' placeholder='price'/>:item.price + '$'}</TableCell>
                                        <TableCell align="center">
                                            <span style={{ margin: '0 5px' }}>{item.quantity}</span>
                                            {item.isEdit && <div >
                                                <button onClick={() => increaseQuantity(item)}>+</button>
                                                <button onClick={() => decreaseQuantity(item)}>−</button>
                                            </div>}

                                        </TableCell>
                                        <TableCell align="center">{item.price * item.quantity}$</TableCell>
                                        <TableCell align="center">
                                            <button onClick={() =>
                                                setShopList(shopList.map((i) =>
                                                    i.id !== item.id ? i : { ...i, isEdit: !i.isEdit }
                                                ))
                                            }>
                                                Edit
                                            </button>
                                        </TableCell>                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', paddingTop: '1%' }}>
                    <div style={{ display: 'flex', justifyContent: 'start', paddingLeft: '11%' }}>
                        <button style={{ color: 'green' }} onClick={() => navigate('/AddItemCard')}>Add item</button>
                        <button style={{ marginLeft: '10px', color: 'black', backgroundColor: 'red' }} onClick={() => clearShop()}>Delete all</button>
                    </div>
                </div>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 20]}
                    component="div"
                    count={shopList.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
}
