/* eslint-disable no-unused-vars */
export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[];

export interface Database {
    public: {
        Tables: {
            order_product: {
                Row: {
                    id_order: number;
                    id_product: number;
                    num_product: number;
                };
                Insert: {
                    id_order?: number;
                    id_product: number;
                    num_product: number;
                };
                Update: {
                    id_order?: number;
                    id_product?: number;
                    num_product?: number;
                };
                Relationships: [
                    {
                        foreignKeyName: "order_product_id_order_fkey";
                        columns: ["id_order"];
                        isOneToOne: false;
                        referencedRelation: "orders";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "order_product_id_product_fkey";
                        columns: ["id_product"];
                        isOneToOne: false;
                        referencedRelation: "products";
                        referencedColumns: ["id"];
                    },
                ];
            };
            orders: {
                Row: {
                    id: number;
                    id_table: number | null;
                    id_tenant: number | null;
                    status: string;
                    time: string | null;
                };
                Insert: {
                    id?: number;
                    id_table?: number | null;
                    id_tenant?: number | null;
                    status: string;
                    time?: string | null;
                };
                Update: {
                    id?: number;
                    id_table?: number | null;
                    id_tenant?: number | null;
                    status?: string;
                    time?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: "orders_id_table_fkey";
                        columns: ["id_table"];
                        isOneToOne: false;
                        referencedRelation: "tables";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "orders_id_tenant_fkey";
                        columns: ["id_tenant"];
                        isOneToOne: false;
                        referencedRelation: "tenants";
                        referencedColumns: ["id"];
                    },
                ];
            };
            payments: {
                Row: {
                    id: number;
                    id_order: number;
                    status: string | null;
                };
                Insert: {
                    id?: number;
                    id_order: number;
                    status?: string | null;
                };
                Update: {
                    id?: number;
                    id_order?: number;
                    status?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: "payments_id_order_fkey";
                        columns: ["id_order"];
                        isOneToOne: false;
                        referencedRelation: "orders";
                        referencedColumns: ["id"];
                    },
                ];
            };
            products: {
                Row: {
                    description: string | null;
                    id: number;
                    id_tenant: number;
                    image: string | null;
                    name: string | null;
                    price: number | null;
                    stock: number | null;
                };
                Insert: {
                    description?: string | null;
                    id?: number;
                    id_tenant: number;
                    image?: string | null;
                    name?: string | null;
                    price?: number | null;
                    stock?: number | null;
                };
                Update: {
                    description?: string | null;
                    id?: number;
                    id_tenant?: number;
                    image?: string | null;
                    name?: string | null;
                    price?: number | null;
                    stock?: number | null;
                };
                Relationships: [
                    {
                        foreignKeyName: "products_id_tenant_fkey";
                        columns: ["id_tenant"];
                        isOneToOne: false;
                        referencedRelation: "tenants";
                        referencedColumns: ["id"];
                    },
                ];
            };
            tables: {
                Row: {
                    id: number;
                    num_seat: number;
                    status: string;
                };
                Insert: {
                    id?: number;
                    num_seat: number;
                    status: string;
                };
                Update: {
                    id?: number;
                    num_seat?: number;
                    status?: string;
                };
                Relationships: [];
            };
            tenants: {
                Row: {
                    close_hour: string | null;
                    description: string | null;
                    id: number;
                    image: string | null;
                    name: string;
                    open_hour: string | null;
                    rating: number | null;
                };
                Insert: {
                    close_hour?: string | null;
                    description?: string | null;
                    id?: number;
                    image?: string | null;
                    name: string;
                    open_hour?: string | null;
                    rating?: number | null;
                };
                Update: {
                    close_hour?: string | null;
                    description?: string | null;
                    id?: number;
                    image?: string | null;
                    name?: string;
                    open_hour?: string | null;
                    rating?: number | null;
                };
                Relationships: [
                    {
                        foreignKeyName: "tenants_id_fkey";
                        columns: ["id"];
                        isOneToOne: true;
                        referencedRelation: "users";
                        referencedColumns: ["id"];
                    },
                ];
            };
            users: {
                Row: {
                    email: string;
                    fullname: string;
                    id: number;
                    password: string;
                    role: string;
                    username: string;
                };
                Insert: {
                    email: string;
                    fullname: string;
                    id?: number;
                    password: string;
                    role: string;
                    username: string;
                };
                Update: {
                    email?: string;
                    fullname?: string;
                    id?: number;
                    password?: string;
                    role?: string;
                    username?: string;
                };
                Relationships: [];
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
}
