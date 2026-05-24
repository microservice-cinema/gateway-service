import { InjectGrpcClient } from '@microservice-cinema/common'
import type { AccountServiceClient } from '@microservice-cinema/contracts/gen/account'
import { Injectable } from '@nestjs/common'
import type { ClientGrpc } from '@nestjs/microservices'

import { AbstractGrpcClient } from '../../shared/grpc/abstract-grpc.client'

@Injectable()
export class AccountClientGrpc extends AbstractGrpcClient<AccountServiceClient> {
	constructor(@InjectGrpcClient('ACCOUNT_PACKAGE') client: ClientGrpc) {
		super(client, 'AccountService')
	}
}
