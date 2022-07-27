import React, {useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';
// import PropTypes from 'prop-types';
// import styles from './ProductList.module.scss';

// const ProductList = () => 
// (
//   <div className={styles.ProductList}>
//     <div>
//     </div>
// );

// ProductList.propTypes = {};

// ProductList.defaultProps = {};

const columns = 
[
    {
        name: 'ProductId',
        selector: row => row.ProductId,
        width: '100px'
    },
    // {
    //     name: 'coverimage',
    //     cell: row => <img src={row.coverimage} width={50} alt={row.name}></img>,
    //     selector: row => row.coverimage,
    //     width: '100px'
    // },
    {
        name: 'ProductName',
        selector: row => row.ProductName,
        width: '200px'
    },
    {
        name: 'ProductCode',
        selector: row => row.ProductCode,
        width: '500px'
    },
    {
        name: 'ProductImage',
        selector: row => row.ProductImage,
        width: '100px'
    },
    {
        name: 'ProductDescription',
        selector: row => row.ProductDescription,
        width: '100px'
    },
    {
        name: 'ProductUnitPrice',
        selector: row => row.ProductUnitPrice,
        width: '100px'
    },
    {
        name: 'TotalQty',
        selector: row => row.TotalQty,
        width: '100px'
    },
];
  
  
  function ProductList() 
  {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const [items, setItems] = useState([]);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);
  
    useEffect(() => 
    {
      fetchData(1, perPage);
    }, [perPage])
  
    const fetchData = async (page, per_page) => 
    {
      fetch(`http://localhost:8090/api/products?page=${page}&per_page=${per_page}`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            setTotalRows(result.total);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }
  
    const handlePageChange = page => 
    {
      fetchData(page, perPage);
    }
  
    const handlePerRowsChange = async (newPerPage, page) => 
    {
      setPerPage(newPerPage);
    }
  
    if (error) 
    {
      return <div>Error: {error.message}</div>;
    } 
    else if (!isLoaded) 
    {
      return <div>Loading...</div>;
    } 
    else 
    {
      return (
        <div className="ProductList">
          <DataTable
            columns={columns}
            data={items}
            pagination
            paginationServer
            paginationTotalRows={totalRows}
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handlePerRowsChange}
          />
        </div>
      );
    }
  }

export default ProductList;
