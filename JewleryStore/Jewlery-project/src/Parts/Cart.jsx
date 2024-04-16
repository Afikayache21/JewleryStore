import { CartContext } from './CartContext';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'image', label: 'Image', },
  { id: 'title', label: 'Title', },
  { id: 'price', label: 'Price', },
  { id: 'quantity', label: 'Quantity', },
  { id: 'total', label: 'Total', },
];


export default function StickyHeadTable() {
  const { addToCart, cartList, removeFromCart, clearCart, setCartList } = React.useContext(CartContext);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [totalPrice, setTotalPrice] = React.useState(0);

  React.useEffect(() => {
    setTotalPrice(cartList.reduce((total, item) => total + item.price * item.quantity, 0));
  }, [cartList]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const increaseQuantity = (item) => {
    const index = cartList.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      const updatedCartList = [...cartList];
      updatedCartList[index] = { ...updatedCartList[index], quantity: updatedCartList[index].quantity + 1 };
      setCartList(updatedCartList);
    };
  }

  const decreaseQuantity = (item) => {
    if (item.quantity == 1) {
      removeFromCart(item);
    }
    else {
      const index = cartList.findIndex((cartItem) => cartItem.id === item.id);
      if (index !== -1) {
        const updatedCartList = [...cartList];
        updatedCartList[index] = { ...updatedCartList[index], quantity: updatedCartList[index].quantity - 1 };
        setCartList(updatedCartList);
      }
    };
  }

  return (
    <div style={{ height:'57vh', margin: "8%" }}>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align="center"
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {cartList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={item.id}>
                      <TableCell align="center">
                        <img src={item.images[0]} alt={item.title} style={{ width: 50, height: 50 }} />
                      </TableCell>
                      <TableCell align="center">{item.title}</TableCell>
                      <TableCell align="center">{item.price}$</TableCell>
                      <TableCell align="center">
                        <button onClick={() => increaseQuantity(item)}>+</button>
                        <span style={{ margin: '0 5px' }}>{item.quantity}</span>
                        <button onClick={() => decreaseQuantity(item)}>−</button>
                      </TableCell>
                      <TableCell align="center">{item.price * item.quantity}$</TableCell>
                    </TableRow>
                  );
                })}
              <TableRow>
                <TableCell  colSpan={4} align="center">
                  <button onClick={() => clearCart()}>Purchase</button>
                </TableCell>
                <TableCell align="center" >
                  Total: {totalPrice}$
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={cartList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}