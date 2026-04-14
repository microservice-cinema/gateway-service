import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class TelegramVerifyRequest {
	@ApiProperty({
		example: 'eyJ1c2VyX2lkIjoxMjM0NTY3ODkwLCJmaXJzdF9uYW1lIjoi0JDQvd...'
	})
	@IsString()
	@IsNotEmpty()
	public tgAuthResult: string
}
