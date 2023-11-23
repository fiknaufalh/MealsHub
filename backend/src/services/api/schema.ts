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
            order: {
                Row: {
                    id: number;
                    id_payment: number | null;
                    id_table: number | null;
                    id_tenant: number | null;
                    status: string;
                    time: string | null;
                };
                Insert: {
                    id?: number;
                    id_payment?: number | null;
                    id_table?: number | null;
                    id_tenant?: number | null;
                    status: string;
                    time?: string | null;
                };
                Update: {
                    id?: number;
                    id_payment?: number | null;
                    id_table?: number | null;
                    id_tenant?: number | null;
                    status?: string;
                    time?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: "order_id_payment_fkey";
                        columns: ["id_payment"];
                        isOneToOne: false;
                        referencedRelation: "payment";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "order_id_table_fkey";
                        columns: ["id_table"];
                        isOneToOne: false;
                        referencedRelation: "table";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "order_id_tenant_fkey";
                        columns: ["id_tenant"];
                        isOneToOne: false;
                        referencedRelation: "tenant";
                        referencedColumns: ["id"];
                    },
                ];
            };
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
                        referencedRelation: "order";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "order_product_id_product_fkey";
                        columns: ["id_product"];
                        isOneToOne: false;
                        referencedRelation: "product";
                        referencedColumns: ["id"];
                    },
                ];
            };
            payment: {
                Row: {
                    id: number;
                    status: string;
                };
                Insert: {
                    id?: number;
                    status: string;
                };
                Update: {
                    id?: number;
                    status?: string;
                };
                Relationships: [];
            };
            product: {
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
                        foreignKeyName: "product_id_tenant_fkey";
                        columns: ["id_tenant"];
                        isOneToOne: false;
                        referencedRelation: "tenant";
                        referencedColumns: ["id"];
                    },
                ];
            };
            table: {
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
            tenant: {
                Row: {
                    close_hour: string | null;
                    description: string | null;
                    id: number;
                    name: string;
                    open_hour: string | null;
                    rating: number | null;
                };
                Insert: {
                    close_hour?: string | null;
                    description?: string | null;
                    id?: number;
                    name: string;
                    open_hour?: string | null;
                    rating?: number | null;
                };
                Update: {
                    close_hour?: string | null;
                    description?: string | null;
                    id?: number;
                    name?: string;
                    open_hour?: string | null;
                    rating?: number | null;
                };
                Relationships: [
                    {
                        foreignKeyName: "tenant_id_fkey";
                        columns: ["id"];
                        isOneToOne: true;
                        referencedRelation: "user";
                        referencedColumns: ["id"];
                    },
                ];
            };
            user: {
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
            // eslint-disable-next-line no-unused-vars
            [_ in never]: never;
        };
        Functions: {
            // eslint-disable-next-line no-unused-vars
            [_ in never]: never;
        };
        Enums: {
            // eslint-disable-next-line no-unused-vars
            [_ in never]: never;
        };
        CompositeTypes: {
            // eslint-disable-next-line no-unused-vars
            [_ in never]: never;
        };
    };
}
