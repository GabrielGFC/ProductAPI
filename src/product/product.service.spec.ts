import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

describe('ProductService', () => {
  let service: ProductService;
  let repo: Repository<Product>;

  const mockProduct = {
    id: 1,
    nome: 'Produto Teste',
    descricao: 'Descrição',
    preco: 100,
    categoria: 'Categoria',
    imagem: 'uploads/teste.jpg',
  };

  const mockRepo = {
    create: jest.fn().mockReturnValue(mockProduct),
    save: jest.fn().mockResolvedValue(mockProduct),
    find: jest.fn().mockResolvedValue([mockProduct]),
    findOneBy: jest.fn().mockResolvedValue(mockProduct),
    remove: jest.fn().mockResolvedValue(null),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: getRepositoryToken(Product),
          useValue: mockRepo,
        },
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
    repo = module.get<Repository<Product>>(getRepositoryToken(Product));
  });

  it('deve criar um produto', async () => {
    const result = await service.create(mockProduct, 'teste.jpg');
    expect(repo.save).toHaveBeenCalled();
    expect(result.nome).toEqual('Produto Teste');
  });

  it('deve retornar todos os produtos', async () => {
    const result = await service.findAll();
    expect(result).toHaveLength(1);
    expect(repo.find).toHaveBeenCalled();
  });

  it('deve retornar um produto pelo ID', async () => {
    const result = await service.findOne(1);
    expect(result.id).toEqual(1);
    expect(repo.findOneBy).toHaveBeenCalledWith({ id: 1 });
  });

  it('deve atualizar um produto', async () => {
    const dto = { nome: 'Atualizado' };
    const result = await service.update(1, dto);
    expect(result.nome).toEqual('Atualizado');
  });

  it('deve remover um produto', async () => {
    const result = await service.remove(1);
    expect(repo.remove).toHaveBeenCalled();
  });
});
