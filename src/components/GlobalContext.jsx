import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
  const data = [
    {
      product_img: null,
      new_arive: true,
      offer: '0',
      product_name: 'Laptop 1',
      Categores: 'Laptop',
      brand: 'hp',
      price: '5000',
      description: 'لابتوب جامد طحن بينور في الضلمة',
      Specifications:
        'ram 8 gb , screen hd , HD 1tiera , ssd 255, i5 10gen rtx 2030',
      stock: '207',
    },
    {
      product_img: null,

      new_arive: true,
      offer: '0',
      product_name: 'Laptop 2',
      Categores: 'Laptop',
      brand: 'hp',
      price: '6000',
      description: 'لابتوب جامد طحن بينور في الضلمة',
      Specifications:
        'ram 8 gb , screen hd , HD 1tiera , ssd 255, i5 10gen rtx 2030',
      stock: '253',
    },
    {
      product_img: null,

      new_arive: true,
      offer: '0',
      product_name: 'Laptop 3',
      Categores: 'Laptop',
      brand: 'hp',
      price: '7000',
      description: 'لابتوب جامد طحن بينور في الضلمة',
      Specifications:
        'ram 8 gb , screen hd , HD 1tiera , ssd 255, i5 10gen rtx 2030',
      stock: '380',
    },
    {
      product_img: null,

      new_arive: true,
      offer: '0',
      product_name: 'Laptop 4',
      Categores: 'Laptop',
      brand: 'dell',
      price: '5000',
      description: 'لابتوب جامد طحن بينور في الضلمة',
      Specifications:
        'ram 8 gb , screen hd , HD 1tiera , ssd 255, i5 10gen rtx 2030',
      stock: '408',
    },
    {
      product_img: null,
      new_arive: true,
      offer: '0',
      product_name: 'Laptop 5',
      Categores: 'Laptop',
      brand: 'dell',
      price: '6000',
      description: 'لابتوب جامد طحن بينور في الضلمة',
      Specifications:
        'ram 8 gb , screen hd , HD 1tiera , ssd 255, i5 10gen rtx 2030',
      stock: '213',
    },
    {
      product_img: null,

      new_arive: true,
      offer: '0',
      product_name: 'Laptop 6',
      Categores: 'Laptop',
      brand: 'dell',
      price: '7000',
      description: 'لابتوب جامد طحن بينور في الضلمة',
      Specifications:
        'ram 8 gb , screen hd , HD 1tiera , ssd 255, i5 10gen rtx 2030',
      stock: '153',
    },
    {
      product_img: null,

      new_arive: true,
      offer: '0',
      product_name: 'Laptop 7',
      Categores: 'Laptop',
      brand: 'lenovo',
      price: '5000',
      description: 'لابتوب جامد طحن بينور في الضلمة',
      Specifications:
        'ram 8 gb , screen hd , HD 1tiera , ssd 255, i5 10gen rtx 2030',
      stock: '331',
    },
    {
      product_img: null,
      new_arive: true,
      offer: '0',
      product_name: 'Laptop 8',
      Categores: 'Laptop',
      brand: 'lenovo',
      price: '6000',
      description: 'لابتوب جامد طحن بينور في الضلمة',
      Specifications:
        'ram 8 gb , screen hd , HD 1tiera , ssd 255, i5 10gen rtx 2030',
      stock: ' 404',
    },
    {
      product_img: null,

      new_arive: true,
      offer: '0',
      product_name: 'Laptop 9',
      Categores: 'Laptop',
      brand: 'lenovo',
      price: '7000',
      description: 'لابتوب جامد طحن بينور في الضلمة',
      Specifications:
        'ram 8 gb , screen hd , HD 1tiera , ssd 255, i5 10gen rtx 2030',
      stock: '263',
    },
    {
      product_img: null,
      new_arive: true,
      offer: '0',
      product_name: 'External Hard 1TB',
      Categores: 'Storage',
      brand: 'Western Digital',
      price: '1500',
      description: 'هارد خارجي 1 تيرابايت مع USB 3.0',
      Specifications:
        'Capacity: 1TB, Interface: USB 3.0, Compatibility: Windows & Mac, Portable',
      stock: '421',
    },
    {
      product_img: null,

      new_arive: true,
      offer: ' 0',
      product_name: 'Internal Hard 2TB',
      Categores: 'Storage',
      brand: 'Seagate',
      price: '2000',
      description: 'هارد داخلي 2 تيرابايت بسرعات عالية',
      Specifications:
        'Capacity: 2TB, Interface: SATA 6Gb/s, Speed: 7200 RPM, Usage: Desktop',
      stock: '385',
    },
    {
      product_img: null,
      new_arive: true,
      offer: '0',
      product_name: 'SSD 512GB',
      Categores: 'Storage',
      brand: 'Samsung',
      price: '3000',
      description: 'قرص SSD عالي السرعة 512 جيجابايت',
      Specifications:
        'Capacity: 512GB, Interface: NVMe, Speed: Up to 3500 MB/s, Form Factor: M.2',
      stock: '476',
    },
    {
      product_img: null,

      new_arive: true,
      offer: '0',
      product_name: 'M.2 SSD 1TB',
      Categores: 'Storage',
      brand: 'Kingston',
      price: '4000',
      description: 'قرص تخزين M.2 SSD بسعة 1 تيرابايت',
      Specifications:
        'Capacity: 1TB, Interface: NVMe, Speed: Up to 2000 MB/s, Form Factor: M.2',
      stock: '135',
    },
    {
      product_img: null,

      new_arive: true,
      offer: '0',
      product_name: 'External SSD 256GB',
      Categores: 'Storage',
      brand: 'SanDisk',
      price: '1200',
      description: 'قرص خارجي SSD بسعة 256 جيجابايت',
      Specifications:
        'Capacity: 256GB, Interface: USB-C, Speed: Up to 1050 MB/s, Portable',
      stock: ' 413',
    },
    {
      product_img: null,

      new_arive: true,
      offer: '0',
      product_name: 'Memory Card 128GB',
      Categores: 'Storage',
      brand: 'SanDisk',
      price: '500',
      description: 'كارت ميموري بسعة 128 جيجابايت للهواتف والكاميرات',
      Specifications:
        'Capacity: 128GB, Speed: Up to 100 MB/s, Class 10, UHS-I, Usage: Mobile, Camera',
      stock: '490',
    },
    {
      product_img: null,
      new_arive: true,
      offer: '30',
      product_name: 'USB Flash Drive 64GB',
      Categores: 'Storage',
      brand: 'Kingston',
      price: '150',
      description: 'فلاش ديسك بسعة 64 جيجابايت مع USB 3.0',
      Specifications:
        'Capacity: 64GB, Interface: USB 3.0, Speed: Up to 150 MB/s, Portable',
      stock: '413',
    },
    {
      product_img: null,

      new_arive: true,
      offer: '50',
      product_name: 'Gaming Mouse',
      Categores: 'Accessories',
      brand: 'Logitech',
      price: '800',
      description: 'ماوس ألعاب احترافي مزود بـ RGB',
      Specifications:
        'Buttons: 6, DPI: Up to 12000, RGB lighting, Programmable buttons',
      stock: '450',
    },
    {
      product_img: null,

      new_arive: true,
      offer: '30',
      product_name: 'Mechanical Keyboard',
      Categores: 'Accessories',
      brand: 'Corsair',
      price: '1500',
      description: 'كيبورد ميكانيكي مزود بإضاءة RGB',
      Specifications:
        'Switches: Cherry MX, RGB lighting, Programmable macros, Form factor: Full-size',
      stock: '55',
    },
    {
      product_img: null,
      new_arive: true,
      offer: '25',
      product_name: 'Headphones',
      Categores: 'Accessories',
      brand: 'Sony',
      price: '900',
      description: 'سماعات رأس بجودة صوت عالية وعزل الضوضاء',
      Specifications:
        'Type: Over-ear, Noise Cancelling, Wireless, Battery life: Up to 20 hours',
      stock: '376',
    },
    {
      product_img: null,

      new_arive: true,
      offer: '10',
      product_name: 'Mousepad XL',
      Categores: 'Accessories',
      brand: 'Razer',
      price: '200',
      description: 'لوحة ماوس كبيرة الحجم للألعاب',
      Specifications:
        'Size: 900mm x 400mm, Surface: Micro-textured, Anti-slip base, Usage: Gaming',
      stock: '121',
    },
    {
      product_img: null,
      new_arive: true,
      offer: '0',
      product_name: 'Gaming Controller',
      Categores: 'Accessories',
      brand: 'Xbox',
      price: '1000',
      description: 'جهاز تحكم للألعاب مع دعم الكمبيوتر',
      Specifications:
        'Buttons: 12, Connectivity: Wireless, Compatibility: PC, Xbox, Vibration feedback',
      stock: '254',
    },
    {
      product_img: null,

      new_arive: true,
      offer: '10',
      product_name: 'Bluetooth Speaker',
      Categores: 'Accessories',
      brand: 'JBL',
      price: '600',
      description: 'سماعة بلوتوث محمولة بجودة صوت عالية',
      Specifications:
        'Power: 20W, Battery life: Up to 12 hours, Connectivity: Bluetooth 5.0',
      stock: '10',
    },
  ]
  const [cartArray, setCartArray] = useState([])
  const [cartToggle, setCartToggle] = useState(false)
  const [sideNavToggle, setSideNavToggle] = useState(false)
  const [maxPrice, setMaxPrice] = useState()
  const [allProducts, setAllProducts] = useState([])
  const [filterBrand, setFilterBrand] = useState([])
  const [hideOutOfStock, setHideOutOfStock] = useState(false)
  const [minPrice, setMinPrice] = useState()
  const [category, setCategory] = useState()
  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:1337/api/products')

      setAllProducts(res.data.data)
    } catch (error) {
      null
    }
  }
  const addProducts = async () => {
    data.forEach(async (product) => {
      try {
        await axios.post('http://localhost:1337/api/products', {
          data: product,
        })
      } catch (error) {
        console.log('Error adding product:', product.product_name, error)
      }
    })
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        cartArray,
        setCartArray,
        sideNavToggle,
        setSideNavToggle,
        maxPrice,
        setMaxPrice,
        allProducts,
        setAllProducts,
        filterBrand,
        setFilterBrand,
        hideOutOfStock,
        setHideOutOfStock,
        minPrice,
        setMinPrice,
        cartToggle,
        setCartToggle,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalProvider }
