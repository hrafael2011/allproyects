// See https://aka.ms/new-console-template for more information

using DateTime;

Console.WriteLine("Hello, World!");

int MaximoValor = int.MaxValue; // Dice cual es el valor maximo
int MinimoValor = int.MinValue;// Dice cual es el valor minimo

Console.WriteLine(MaximoValor);



// tipos de datos enteros

int int1 = 2_000_000; // almacena desde -2,147,483,648 a 2,147,483,647
long long1 = 8_000_000_000; // almacena -9,223,372,036,854,775,808 hasta 9,223,372,036,854,775,807

byte byte1 = 145; // 0 hasta 255
sbyte sbyte1 = 100; // -32,768 hasta 32,767

short short1 = 30_000; // -32,768 hasta 32,767 
ushort ushaort1 = 65_000; //0 hasta 65,535

// datos de coma flotante

float altura = 180.123456789f; // datos de tipo float al final de la cantidad debe llebar f // ocupa 4 bytes; precision de 6 a 9 digitos
double anchura = 45.123456789; // ocupa 8 bytes; precision de 15 a 17 digitos
decimal monto = 9.99m; // datos de tipo decimal deben llevar una m al final del monto; precision de 29 a 29 digitos  (es rocomendable temas financieros) 


// ********* Tipos de datos booleanos

bool soyFelipe = true;
bool nosoyFelipe  = false;

// *************Tipos de datos Texto
char primevLetraABC = 'A';
string texto = "Mi amigo me dijo una vez";

//******** String berbating estos permiten poder escribir con saltos de lines en mismo string

string carta = @"A quien puede intersar,

Estimado cliente, debes mucho dinero.

att: La adminstracion";

Console.WriteLine(carta);


//*********** tipo de dato DateTime****************


