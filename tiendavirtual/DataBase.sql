use tiendagenericag05;

CREATE TABLE clientes (
    cedula_cliente BIGINT NOT NULL,
    direccion_cliente VARCHAR(255) DEFAULT NULL,
    email_cliente VARCHAR(255) DEFAULT NULL,
    nombre_cliente VARCHAR(255) DEFAULT NULL,
    telefono_cliente VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (cedula_cliente)
);
  
INSERT INTO clientes VALUES 
(1,'Carrera 55 # 175 35','cliente1@hotmail.com','Cliente 1','1234567'),
(2,'Carrera 50 # 170 80','cliente2@hotmal.com','Cliente 2','9876543'),
(3,'Calle 174 # 54 36','cliente3@hotmail.com','Cliente 3','5647892');

CREATE TABLE usuarios (
  cedula_usuario bigint NOT NULL,
  email_usuario varchar(255) DEFAULT NULL,
  nombre_usuario varchar(255) DEFAULT NULL,
  password varchar(255) DEFAULT NULL,
  usuario varchar(255) DEFAULT NULL,
  PRIMARY KEY (cedula_usuario)
);

INSERT INTO usuarios VALUES 
(11001,'jhonatanlyly@gmail.com','Jhonatan Lyons','password','jlyons');

CREATE TABLE proveedores (
  nitproveedor bigint NOT NULL,
  ciudad_proveedor varchar(255) DEFAULT NULL,
  direccion_proveedor varchar(255) DEFAULT NULL,
  nombre_proveedor varchar(255) DEFAULT NULL,
  telefono_proveedor varchar(255) DEFAULT NULL,
  PRIMARY KEY (nitproveedor)
);

INSERT INTO proveedores VALUES 
(1,'Medellin','Calle 1 # 10 20','Proveedor 1','1234567'),
(2,'Barranquilla','Diagonal 20 # 15 69','Proveedor 2','7654321'),
(3,'Bogotá','Calle 98 # 82 50','Proveedor 3','2345678'),
(4,'Cali','Calle 5 # 5 36','Proveedor 4','8765432'),
(5,'Bucaramanga','Calle 100 # 116 30','Proveedor 5','8523697');

CREATE TABLE productos (
  codigo_producto bigint NOT NULL,
  ivaventa double NOT NULL,
  nitproveedor bigint NOT NULL,
  nombre_producto varchar(255) NOT NULL,
  precio_compra double NOT NULL,
  precio_venta double NOT NULL,
  PRIMARY KEY (codigo_producto),
    CONSTRAINT FK_ProveedorProducto FOREIGN KEY (nitproveedor)
	REFERENCES proveedores (nitproveedor)
) ;

INSERT INTO productos VALUES 
(1,19,1,'Mango',25505,30351),
(2,19,3,'Manzanas',18108,21549),
(3,19,4,'Platanos',29681,35320),
(4,19,3,'Lechuga',29788,35448),
(5,19,1,'Tomates',12739,15159),
(6,19,1,'Calabaza',21315,25365),
(7,19,2,'Apio',19249,22906),
(8,19,2,'Pepino',10958,13040),
(9,19,2,'Champiñones',11046,13145),
(10,19,5,'Leche',21150,25169),
(11,19,5,'Queso',26571,31619),
(12,19,2,'Huevos',12445,14810),
(13,19,1,'Requeson',14329,17052),
(14,19,1,'Arroz',14856,17679),
(15,19,5,'Platano',14941,17780),
(16,19,5,'Papa',29335,34909),
(17,19,5,'Salmon Salvaje',11878,14135),
(18,19,1,'Pera',29951,35642),
(19,19,1,'Manzana',29951,35642);


CREATE TABLE ventas (
    codigo_venta BIGINT NOT NULL AUTO_INCREMENT,
    ivaventa DOUBLE NOT NULL,
    total_venta DOUBLE NOT NULL,
    valor_venta DOUBLE NOT NULL,
    cedula_usuario BIGINT NOT NULL,
    cedula_cliente BIGINT NOT NULL,
    PRIMARY KEY (codigo_venta),
    KEY(cedula_usuario),
    KEY(cedula_cliente),
    CONSTRAINT FK_ClienteVenta FOREIGN KEY (cedula_cliente)
        REFERENCES clientes (cedula_cliente),
    CONSTRAINT FK_VentaUsuario FOREIGN KEY (cedula_usuario)
        REFERENCES usuarios (cedula_usuario)
);

CREATE TABLE detalle_ventas (
    codigo_detalle_venta BIGINT NOT NULL AUTO_INCREMENT,
    cantidad_producto INT NOT NULL,
    codigo_producto BIGINT NOT NULL,
    codigo_venta BIGINT NOT NULL,
    valor_total DOUBLE NOT NULL,
    valor_venta DOUBLE NOT NULL,
    valoriva DOUBLE NOT NULL,
	PRIMARY KEY (codigo_detalle_venta),
    KEY (codigo_producto),
    KEY (codigo_venta ),
    CONSTRAINT FK_Ventas_DetalleVenta FOREIGN KEY (codigo_venta)
        REFERENCES ventas (codigo_venta),
    CONSTRAINT FK_Productos_DetalleVenta FOREIGN KEY (codigo_producto)
        REFERENCES productos (codigo_producto)
);
