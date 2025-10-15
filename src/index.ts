import {
  listarUsuarios,
  criarUsuario,
  atualizarUsuario,
  atualizarParcialUsuario,
  deletarUsuario,
} from './servicorest';

async function main() {
  console.log('🟢 Listando usuários:');
  const usuarios = await listarUsuarios();
  console.log(usuarios);

  console.log('\n🟡 Criando usuário:');
  const novo = await criarUsuario('João da Silva', 'Desenvolvedor');
  console.log(novo);

  console.log('\n🔵 Atualizando usuário (PUT):');
  const atualizado = await atualizarUsuario(2, 'João Atualizado', 'Gerente');
  console.log(atualizado);

  console.log('\n🟣 Atualizando parcialmente usuário (PATCH):');
  const parcial = await atualizarParcialUsuario(2, 'Diretor');
  console.log(parcial);

  console.log('\n🔴 Deletando usuário:');
  const status = await deletarUsuario(2);
  console.log(`Status HTTP: ${status}`);
}

main().catch((err) => console.error('Erro:', err));
