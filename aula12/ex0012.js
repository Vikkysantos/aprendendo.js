var idade = 23;
console.log(`voce tem ${idade} anos`);
if (idade < 18) {
  console.log(`não vota`);
} else if (idade >= 16 && idade < 18) {
  console.log(`voto opcional`);
} else {
  console.log(`voto obrigatório`);
}
