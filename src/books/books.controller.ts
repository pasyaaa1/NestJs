import { Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { get } from 'http';

@Controller('books')
export class BooksController {
    @Get()
    findAll(): string {
        return 'This action returns all books';
    }

    @Put()
    updateData(@Param('id') id: any): string {
        return 'This action updates a book';
    }

    @Delete()
    remove(@Param('id') id: any): string {
        return 'This action removes a book';
    }
}