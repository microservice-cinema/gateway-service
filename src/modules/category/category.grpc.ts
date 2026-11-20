import { InjectGrpcClient } from '@microservice-cinema/common'
import type { CategoryServiceClient } from '@microservice-cinema/contracts/gen/ts/Category'
import { Injectable } from '@nestjs/common'
import type { ClientGrpc } from '@nestjs/microservices'

import { AbstractGrpcClient } from '../../shared/grpc/abstract-grpc.client'

@Injectable()
export class CategoryClientGrpc extends AbstractGrpcClient<CategoryServiceClient> {
	constructor(@InjectGrpcClient('CATEGORY_PACKAGE') client: ClientGrpc) {
		super(client, 'CategoryService')
	}
}
