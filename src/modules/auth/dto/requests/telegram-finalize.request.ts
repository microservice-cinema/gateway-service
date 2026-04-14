import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class TelegramFinalizeRequest {
	@ApiProperty({
		example: 'd009a98b78863eb3fba2e1a1477de125'
	})
	@IsString()
	@IsNotEmpty()
	public sessionId: string
}
