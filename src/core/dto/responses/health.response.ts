import { ApiProperty } from '@nestjs/swagger'

export class HealthResponse {
	@ApiProperty({
		example: 'ok'
	})
	public status: string

	@ApiProperty({
		example: '2026-02-10T12:00:00.000Z'
	})
	public timestamp: string
}
