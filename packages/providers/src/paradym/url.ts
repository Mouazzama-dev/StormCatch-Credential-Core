export function withWalletId(
  path:string,
  walletId:string
){

 return path.replace(
   "{walletId}",
   walletId
 );

}